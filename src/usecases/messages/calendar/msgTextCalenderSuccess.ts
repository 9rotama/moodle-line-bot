import { FlexMessage } from "@line/bot-sdk";

export const msgTextCalenderSuccess = (isUserExisted: boolean): FlexMessage => {
  const text = isUserExisted
    ? "カレンダーの再登録に成功しました。"
    : "登録完了です！リッチメニューより「課題一覧」「通知設定」が利用できるようになりました。";
  const msg: FlexMessage = {
    type: "flex",
    altText: "これはカレンダー登録成功のメッセージです",
    contents: {
      type: "bubble",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "image",
            url: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Check%20mark%20button/3D/check_mark_button_3d.png",
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "カレンダー登録完了",
            size: "20px",
            weight: "bold",
          },
          {
            type: "text",
            text: text,
            weight: "regular",
            wrap: true,
          },
        ],
      },
    },
  };
  return msg;
};
