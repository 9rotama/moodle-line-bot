import { TextMessage } from "@line/bot-sdk";

export const msgTextCalenderInvalidUrl: TextMessage = {
  type: "text",
  text: "無効なURLです。申し訳ありませんが、カレンダー登録の手順をもう一度確認し再度試してみてください。",
};
