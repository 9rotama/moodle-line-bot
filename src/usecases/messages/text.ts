import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";
import { client } from "../../bot";

export const messagesTextUseCase = async (event: MessageEvent) => {
  const { text } = event.message as TextEventMessage;

  const msg: Message = {
    type: "text",
    text: text,
  };

  await client.replyMessage(event.replyToken, msg);

  console.log(event.message);
};
