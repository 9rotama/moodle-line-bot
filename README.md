# moodle-line-bot

## 使用技術
- Typescript
- LineBot SDK
- Prisma
- PostgreSQL

## 開発

### ngrokの初期設定
```
npx ngrok authtoken [ngrokの認証トークン]
```

### サーバの起動
1. Node.js のサーバを3000番ポートで起動

```bash
$ npm start
```
2. terminalをもう1つ開き以下を実行する(ローカルの 3000 番ポートが外部に公開される)

```bash
$ npx ngrok http 3000
```

3. Forwarding に書かれている URL をコピーする
4. LINE Developers にアクセスし "Messaging API設定" > "Webhook URL" に先ほどコピーした URL + "/webhook" を貼り付ける

### リッチメニューの登録
```bash
$ npm run richmenu
```
リッチメニューの画像は`assets/richmenu.png`に配置する

### シラバスからのコース名の取得
```bash
$ npm run course
```
- コース名のリストをシラバスからスクレイピングし課題リストの表示の際に参照する
- `assets/courseList.json`に保存される
- 詳しくは`src/utils/fetchCourseName.ts`を参照

### データベースの起動
1. dockerコンテナを起動する
```bash
$ docker compose up -d
```

2. マイグレーションを行なっていない場合はマイグレーションする
```bash
$ npx prisma migrate dev
```

3. Prisma Studioを起動する
```bash
$ npx prisma studio
```
