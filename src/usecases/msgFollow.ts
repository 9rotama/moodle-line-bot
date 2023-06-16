import { FlexMessage } from "@line/bot-sdk";

export const msgFollow: FlexMessage = {
  type: "flex",
  altText: "これはフォローされた際に送信するメッセージです",
  contents: {
    type: "bubble",
    header: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "image",
          url: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Party%20popper/3D/party_popper_3d.png",
        },
      ],
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "はじめまして！",
          size: "20px",
          weight: "bold",
        },
        {
          type: "text",
          text: "moodle-botを友達登録していただきありがとうございます！利用を開始するために、最初に下のメニューからカレンダー登録を行なってください。",
          weight: "regular",
          wrap: true,
        },
      ],
    },
  },
};
