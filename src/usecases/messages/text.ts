import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";
import { client } from "../../bot";
import { msgTextDefault } from "./msgTextDefault";
import { startRegisterCalender } from "./calendar/startRegisterCalender";
import { sessions } from "../../utils/session";
import { registerCalender } from "./calendar/registerCalender";
import { getTasks } from "./tasks/getTasks";
import { displayTasks } from "./tasks/displayTasks";
import { prisma } from "../../db/db";
import { msgUserNotFound } from "./tasks/msgUserNotFound";

export const messagesTextUseCase = async (event: MessageEvent) => {
  const { text } = event.message as TextEventMessage;

  if (text == "課題一覧") {
    const userId = event.source.userId;
    if (!userId) throw new Error("userId is undefined");
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      await client.replyMessage(event.replyToken, msgUserNotFound);
      return;
    }

    const tasks = await getTasks(user.calenderUrl);
    if (tasks.length == 0) {
      await client.replyMessage(event.replyToken, msgTextDefault);
      return;
    } else {
      await displayTasks(event, tasks);
    }
  } else if (text == "カレンダー登録") {
    await startRegisterCalender(event);
  } else if (text == "通知設定") {
  } else {
    const session = sessions.find((e) => e.userId === event.source.userId);
    if (!session) {
      await client.replyMessage(event.replyToken, msgTextDefault);
      return;
    }
    if (session.type === "registerCalender") {
      registerCalender(event);
    } else if (session.type === "notifySetting") {
    } else {
    }
  }
};
