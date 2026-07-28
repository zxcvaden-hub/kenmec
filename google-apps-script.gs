const SPREADSHEET_ID = '1emp_j9AeKs4BX8Lw9ed5cT9MQABHGBygDpP8LTjwdf8';
const SHEET_NAME = '工作表1';

function doGet() {
  return createJsonResponse({
    success: true,
    message: '廣運客服紀錄服務正常運作',
    version: '0728'
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const payload = parseRequestBody(e);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('找不到工作表：' + SHEET_NAME);
    }

    ensureHeaderRow(sheet);

    const userQuestion = sanitizeCellValue(payload.userQuestion, 1000);
    const faqId = sanitizeCellValue(payload.faqId, 200);
    const faqQuestion = sanitizeCellValue(payload.faqQuestion, 500);
    const sessionId = sanitizeCellValue(payload.sessionId, 200);
    const source = sanitizeCellValue(payload.source || '文字輸入', 100);
    const device = sanitizeCellValue(payload.device, 100);
    const version = sanitizeCellValue(payload.version || '0728', 100);
    const browserTime = sanitizeCellValue(payload.timestamp, 100);

    if (!userQuestion) {
      return createJsonResponse({
        success: false,
        message: '缺少使用者問題'
      });
    }

    const matched =
      payload.matched === true ||
      payload.matched === 'true';

    const fallback =
      payload.fallback === true ||
      payload.fallback === 'true';

    sheet.appendRow([
      new Date(),
      browserTime,
      sessionId,
      userQuestion,
      faqId,
      faqQuestion,
      matched ? '是' : '否',
      fallback ? '是' : '否',
      source,
      device,
      version
    ]);

    return createJsonResponse({
      success: true
    });
  } catch (error) {
    console.error(error);

    return createJsonResponse({
      success: false,
      message: error && error.message
        ? error.message
        : '未知錯誤'
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (error) {
      console.warn(error);
    }
  }
}

function ensureHeaderRow(sheet) {
  const headers = [
    '伺服器時間',
    '瀏覽器時間',
    'Session ID',
    '使用者問題',
    'FAQ ID',
    'FAQ 問題',
    '是否找到答案',
    '是否 Fallback',
    '來源',
    '裝置',
    '客服版本'
  ];

  const lastRow = sheet.getLastRow();

  if (lastRow === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    return;
  }

  const currentHeaders = sheet
    .getRange(1, 1, 1, headers.length)
    .getValues()[0];

  const isEmpty = currentHeaders.every(function (value) {
    return String(value || '').trim() === '';
  });

  if (isEmpty) {
    sheet
      .getRange(1, 1, 1, headers.length)
      .setValues([headers]);

    sheet.setFrozenRows(1);
  }
}

function parseRequestBody(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return e && e.parameter ? e.parameter : {};
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    return e.parameter || {};
  }
}

function sanitizeCellValue(value, maxLength) {
  if (value === null || value === undefined) {
    return '';
  }

  const limit = maxLength || 1000;
  const text = String(value).trim().slice(0, limit);

  if (/^[=+\-@]/.test(text)) {
    return "'" + text;
  }

  return text;
}

function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
