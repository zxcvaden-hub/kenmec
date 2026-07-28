# 廣運50週年慶智能客服｜正式版（kenmec）

> **這是正式版說明。正式對外請只用本站（kenmec）。**

## 基本資訊

| 項目 | 內容 |
|------|------|
| 專案名稱 | 廣運50週年慶智能客服正式版 |
| GitHub repo | `zxcvaden-hub/kenmec` |
| 智能客服 | https://zxcvaden-hub.github.io/kenmec/ |
| QR Code | https://zxcvaden-hub.github.io/kenmec/qr.html |
| 客服／知識庫版本 | **0728** 正式版 |
| FAQ 數量 | **39** 則 |

## 功能

- FAQ 關鍵字回答（報到、交通、餐飲、闖關、摸彩等）
- 正式快捷 6 鈕：交通方式、活動流程 Rundown、如何報到、餐飲安排、參加禮與闖關禮、聯絡福利委員會
- 「交通方式」顯示捷運／公車／停車場卡片與一鍵導航
- 純靜態，不呼叫 OpenAI、不需後端

## 必傳檔案（上傳至 kenmec 根目錄）

```
├── index.html
├── knowledge.json
├── qr.html
├── qrcode.min.js
└── messageImage_1779701547098.jpg
```

> 上傳客服檔案時，**不要刪除或覆蓋正式站既有的 `time-adventure/` 資料夾。**

## 上傳後檢查（建議無痕）

- https://zxcvaden-hub.github.io/kenmec/?v=0728
- https://zxcvaden-hub.github.io/kenmec/qr.html?v=0728
- 副標不出現「大量使用版」
- 快捷 6 鈕正確
- Rundown 含 09:00 前 QR Code 報到、09:30 開放入場、10:00 前完成入場、16:00 閉幕

## 活動重點（2026/8/15）

- 地點：國立臺灣大學綜合體育館
- 報到：出勤／榮譽假 **09:00 前** QR；**09:30** 開放入場；**10:00 前** 就座
- 報到處：三樓（即救護站）
- 保溫瓶：現場不發放，符合資格者活動結束後回廠發放

上傳步驟見：[`README-上傳說明.md`](./README-上傳說明.md)
