import { TextMessage } from "@line/bot-sdk";

export const msgUserNotFound: TextMessage = {
  type: "text",
  text: "ユーザが見つかりません。メニューよりカレンダー登録を行なってから再度お試しください",
};
