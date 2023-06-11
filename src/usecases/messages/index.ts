import { MessageEvent } from "@line/bot-sdk";
import { messagesTextUseCase } from "./text";
import { client } from "../../bot";
import { msgOther } from "./msgOther";

export const messageUsecase = async (event: MessageEvent) => {
  try {
    switch (event.message.type) {
      case "text": {
        messagesTextUseCase(event);
        break;
      }
      default: {
        await client.replyMessage(event.replyToken, msgOther);
        break;
      }
    }
  } catch {
    throw new Error("messages Usecase");
  }
};
