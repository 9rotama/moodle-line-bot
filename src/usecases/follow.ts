import { FollowEvent } from "@line/bot-sdk";
import { client } from "../bot";
import { msgFollow } from "./msgFollow";

export const followUsecase = async (event: FollowEvent) => {
  try {
    await client.replyMessage(event.replyToken, msgFollow);
  } catch {
    throw new Error("follow usecase");
  }
};
