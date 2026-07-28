# 0728 正式廣運客服上線｜上傳說明

打包／知識庫版本：**0728**  
FAQ：**39** 則  
目標 repo：**zxcvaden-hub/kenmec**（正式版）

## 正式網址

- 智能客服：https://zxcvaden-hub.github.io/kenmec/
- QR Code：https://zxcvaden-hub.github.io/kenmec/qr.html

> **正式版只使用 kenmec 網址。**

## 必傳檔案（上傳至 kenmec 根目錄）

```
├── index.html
├── knowledge.json
├── qr.html
├── qrcode.min.js
└── messageImage_1779701547098.jpg
```

可一併上傳說明檔（選用）：

```
├── README.md
├── README-上傳說明.md
├── README-正式版-kenmec.md
└── MANIFEST.json
```

## 上傳步驟

1. 開啟本機 `kenmec` repo（GitHub Desktop → Show in Explorer）
2. 將客服檔案複製到 repo **根目錄**（覆蓋同名檔）
3. **不要刪除或覆蓋正式站既有的 `time-adventure/` 資料夾**
4. Commit：`deploy 0728 正式客服`
5. Push 後等 1～3 分鐘，用無痕視窗測試：
   - https://zxcvaden-hub.github.io/kenmec/?v=0728
   - https://zxcvaden-hub.github.io/kenmec/qr.html?v=0728

## 上傳後檢查

- [ ] 正式首頁快捷按鈕為 6 個：交通方式、活動流程 Rundown、如何報到、餐飲安排、參加禮與闖關禮、聯絡福利委員會
- [ ] 副標不出現「大量使用版」
- [ ] Rundown summary 含：09:00前報到／09:30開放入場／10:00前完成入場／16:00閉幕
- [ ] Rundown opening 最前為「09:00前｜QR Code報到（出勤／榮譽假）」
- [ ] 既有 `time-adventure/` 仍存在（若原本就有）
