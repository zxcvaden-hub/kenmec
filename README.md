# 廣運 50 週年慶 · 智能客服＋時光探險

廣運 50 週年家庭日活動的 **靜態網站**，部署於 GitHub Pages，無需後端伺服器。

## 目前請用的網址（測試版）

> **現階段請只使用 `legoworks` 測試。** `kenmec` 為活動正式上線預留，測試期間勿對外公布。

| 用途 | 網址 |
|------|------|
| 智能客服 | https://zxcvaden-hub.github.io/legoworks/ |
| 客服 QR | https://zxcvaden-hub.github.io/legoworks/qr.html |
| 時光探險活動說明 | https://zxcvaden-hub.github.io/legoworks/time-adventure/ |
| 活動說明 QR | https://zxcvaden-hub.github.io/legoworks/time-adventure/qr.html |
| 第 1–5 關 QR | `time-adventure/level-1/qr.html` 至 `time-adventure/level-5/qr.html`（請於各關現場使用） |

**上傳目標 repo：** `zxcvaden-hub/legoworks`

## 正式版（活動日前上線，目前勿用於測試）

| 用途 | 網址 |
|------|------|
| 智能客服 | https://zxcvaden-hub.github.io/kenmec/ |
| 客服 QR | https://zxcvaden-hub.github.io/kenmec/qr.html |
| 時光探險活動說明 | https://zxcvaden-hub.github.io/kenmec/time-adventure/ |
| 活動說明 QR | https://zxcvaden-hub.github.io/kenmec/time-adventure/qr.html |

**上傳目標 repo：** `zxcvaden-hub/kenmec`（活動正式對外前再部署）

## 功能簡介

### 智能客服（`index.html`）

- 依關鍵字自動回答活動 FAQ（報到、交通、餐飲、闖關、摸彩等）
- 快捷按鈕：交通方式、活動流程、手作體驗、飲水設施、摸彩閉幕、聯絡福利委員會
- 點 **交通方式** → 顯示捷運／公車／停車場卡片與一鍵導航
- 時光探險總 QR 僅顯示活動說明；請到各關現場掃描該關專屬 QR 開始挑戰
- 純靜態運作，不呼叫 OpenAI、不需資料庫

### 時光探險（`time-adventure/`）

五關各有獨立網址與 QR Code。**闖關護照**將於活動日前預先發送（無須報到時領取）。到達關卡現場後掃描該關 QR，完成手機挑戰並向本關關主報通關密語，在**闖關護照**蓋章；完成本關後需前往其他關現場掃描其 QR。

1. 啟航輸送機（5×5 管道拼圖）
2. 液冷尋密碼
3. 歷史小測驗（歷史牆五題問答）
4. 智慧模組配對（翻牌配對）
5. 廣運終極密碼（輸入 **2026**）

五關全數蓋章後，可找**任一關關主**確認並直接領取**闖關禮 100 元禮券**（每人限 1 次；護照遺失恕不補發）。

## 打包與上傳

```bash
py scripts/pack-deploy.py
```

輸出資料夾：`時光探險上傳0702/`

### 必傳檔案（上傳至 repo 根目錄）

```
├── index.html
├── knowledge.json
├── qr.html                    ← 智能客服 QR
├── qrcode.min.js
├── messageImage_1779701547098.jpg
└── time-adventure/
    ├── index.html
    ├── puzzles.json
    ├── adventure.js
    ├── qr.html                ← 時光探險 QR
    ├── level-1/ 至 level-5/  ← 五個獨立關卡與各關 QR
    └── audio/bgm.mp3
```

### 上傳步驟（測試期）

1. 執行 `py scripts/pack-deploy.py`
2. 開啟 GitHub repo：**`zxcvaden-hub/legoworks`**
3. 將 `時光探險上傳0702/` 內所有檔案上傳至 repo 根目錄（覆蓋同名檔）
4. Commit：`deploy 廣運50週年測試版`
5. 用 **legoworks** 網址測試（可加 `?v=日期` 避免快取）

### 若 repo 內仍有舊檔，請刪除

- `time-adventure/print.html`、`time-adventure/staff.html`（已停用）
- `server.js`、`public/`、`data/` 等開發用檔案

## 上傳後測試清單（legoworks）

- [ ] https://zxcvaden-hub.github.io/legoworks/ 客服首頁可開啟
- [ ] 快捷按鈕**無**「時光探險」
- [ ] `qr.html` 掃碼 → 進入客服
- [ ] `time-adventure/qr.html` 掃碼 → 進入闖關
- [ ] 五關可任意點選、通關後提示關主蓋章
- [ ] 第五關輸入 `2026` 可通關

## 維護方式（本機）

1. 編輯 FAQ：`data/knowledge.json`
2. 同步：`node inject-knowledge.js`（或手動更新 `index.html` 內嵌 KNOWLEDGE）
3. 編輯闖關題目：只修改 `time-adventure/puzzles.json`；打包時會自動內嵌至闖關頁
4. 打包後上傳至 **legoworks**（測試）或 **kenmec**（正式上線時）

## 活動重點（2026/8/15）

- 地點：國立臺灣大學綜合體育館
- 報到：09:30–10:00，**三樓報到處（即救護站）**
- 五十週年紀念禮：**保溫瓶**（員工限定、全程參加），**活動現場不發放**，於活動結束後回廠發放
- 來賓餐盒：三樓報到處外走廊，11:30 起
- 餐車：一樓，11:30 起
- 現場問題：廣運福利委員會、三樓服務台

## 授權與用途

本專案為廣運 50 週年慶活動內部使用。活動相關文案請以主辦單位公告為準。
