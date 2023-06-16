import { MessageEvent } from "@line/bot-sdk";
import { client } from "../../../bot";
import { msgStartRegisterCalender } from "./msgStartRegisterCalender";
import { Session, sessions } from "../../../utils/session";

export const startRegisterCalender = async (event: MessageEvent) => {
  const userId = event.source.userId;

  if (!userId) throw new Error("userId is undefined");

  if (sessions.find((e) => e.userId === userId)) return;
  const session: Session = { userId: userId, type: "registerCalender" };
  sessions.push(session);

  await client.replyMessage(event.replyToken, msgStartRegisterCalender);
};
