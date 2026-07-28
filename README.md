# 廣運50週年慶智能客服正式版

廣運 50 週年家庭日活動 **智能客服正式版**（靜態網站，部署於 GitHub Pages，無需後端）。

## 正式資訊

| 項目 | 內容 |
|------|------|
| 專案名稱 | 廣運50週年慶智能客服正式版 |
| 正式 repo | `zxcvaden-hub/kenmec` |
| 智能客服 | https://zxcvaden-hub.github.io/kenmec/ |
| QR Code | https://zxcvaden-hub.github.io/kenmec/qr.html |
| 知識庫版本 | **0728** |
| FAQ 數量 | **39** 則 |

> **正式版只使用 kenmec 網址。**

詳細說明亦可見：[`README-正式版-kenmec.md`](./README-正式版-kenmec.md)

## 功能簡介

- 依關鍵字自動回答活動 FAQ（報到、交通、餐飲、闖關、摸彩等）
- 正式首頁快捷按鈕為 6 個：交通方式、活動流程 Rundown、如何報到、餐飲安排、參加禮與闖關禮、聯絡福利委員會
- 點「交通方式」可顯示捷運／公車／停車場卡片與一鍵導航
- 純靜態運作，不呼叫 OpenAI、不需資料庫

## 匿名提問紀錄

本客服可將匿名提問紀錄送至 Google Apps Script，並寫入 Google Sheets。

紀錄欄位包括：

- 時間
- 匿名 Session ID
- 使用者問題
- 命中的 FAQ ID
- FAQ 問題
- 是否找到答案
- 是否 Fallback
- 來源
- 裝置類型
- 客服版本

本功能不主動蒐集姓名、員工編號、電話、Email 或 IP。

Apps Script Web App：

https://script.google.com/macros/s/AKfycbzmlpQFdZUh4wZNXDxQFoHeifS1dp0MgKQPDPHFRR8htWUn34hXwymWyb2GKiY_o97y8Q/exec

專案內參考程式：`google-apps-script.gs`（需貼至 Google Apps Script 編輯器；修改後請重新部署新版本）。

注意：

不要把 Google 試算表設為任何人可公開編輯。

## 必傳檔案（上傳至 kenmec 根目錄）

```
├── index.html
├── knowledge.json
├── qr.html
├── qrcode.min.js
└── messageImage_1779701547098.jpg
```

> 上傳客服檔案時，**不要刪除或覆蓋正式站既有的 `time-adventure/` 資料夾。**

## 上傳步驟

1. 開啟 GitHub repo：**`zxcvaden-hub/kenmec`**
2. 將上述客服檔案上傳至 repo 根目錄（覆蓋同名檔）
3. **保留**既有 `time-adventure/`（若存在）
4. Commit 後以無痕視窗測試：https://zxcvaden-hub.github.io/kenmec/?v=0728

上傳細節見：[`README-上傳說明.md`](./README-上傳說明.md)

## 維護方式（本機）

1. 編輯 FAQ：`data/knowledge.json`（若有）或根目錄 `knowledge.json`
2. 同步：確保 `index.html` 內嵌 `const KNOWLEDGE` 與 `knowledge.json` 完全一致
3. 確認後再上傳至 **kenmec**

## 活動重點（2026/8/15）

- 地點：國立臺灣大學綜合體育館
- 報到：出勤／榮譽假請於 **09:00 前** 完成個人 QR Code 報到；一般活動 **09:30** 開放入場；請於 **10:00 前** 完成入場並就座
- 報到處：三樓（即救護站）
- 五十週年紀念禮：保溫瓶（員工限定、全程參加），活動現場不發放，結束後回廠發放
- 現場問題：廣運福利委員會、三樓服務台

## 授權與用途

本專案為廣運 50 週年慶活動內部使用。活動相關文案請以主辦單位公告為準。
