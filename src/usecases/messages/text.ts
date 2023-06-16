import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";
import { client } from "../../bot";
import { registerCalender } from "./registerCalender";
import { msgRegisterCalender } from "./msgRegisterCalender";

export const messagesTextUseCase = async (event: MessageEvent) => {
  const { text } = event.message as TextEventMessage;

  switch (text) {
    case "カレンダー登録":
      await client.replyMessage(event.replyToken, msgRegisterCalender);
  }

  console.log(event.message);
};
