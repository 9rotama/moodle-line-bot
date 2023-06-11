# moodle-line-bot

# 開発

## ngrokの初期設定
```
npx ngrok authtoken [ngrokの認証トークン]
```

## サーバの起動
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
