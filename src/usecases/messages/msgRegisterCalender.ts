import { FlexMessage } from "@line/bot-sdk";

export const msgRegisterCalender: FlexMessage = {
  type: "flex",
  altText: "これはカレンダー登録の手順説明です",
  contents: {
    type: "bubble",
    header: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "image",
          url: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Spiral%20calendar/3D/spiral_calendar_3d.png",
        },
      ],
      backgroundColor: "#0366fc",
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "カレンダー登録",
          weight: "bold",
          size: "20px",
          align: "start",
        },
        {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "①下のボタンからLMSにログイン",
              wrap: true,
            },
            {
              type: "text",
              text: "②カレンダーをエクスポートする画面が表示されたら、以下のように選択する",
              wrap: true,
            },
            {
              type: "text",
              text: "・エクスポートするイベント: 「コースに関連したイベント」",
              wrap: true,
            },
            {
              type: "text",
              text: "・期間: 「今週」",
              wrap: true,
            },
            {
              type: "text",
              text: "③「カレンダーURLを取得する」を押し、ボタンの下に表示されるURLをコピーする",
              wrap: true,
            },
            {
              type: "text",
              text: "④コピーしたURLをこのトークルームに送信",
              wrap: true,
            },
          ],
          margin: "5px",
        },
        {
          type: "button",
          action: {
            type: "uri",
            label: "LMSに移動",
            uri: "https://elms.u-aizu.ac.jp/calendar/export.php",
          },
          style: "primary",
          color: "#0366fc",
          offsetTop: "5px",
        },
      ],
      justifyContent: "center",
    },
  },
};
