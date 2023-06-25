import { MessageEvent, TextEventMessage, Message } from "@line/bot-sdk";
import { client } from "../../bot";
import { msgTextDefault } from "./msgTextDefault";
import { startRegisterCalender } from "./calendar/startRegisterCalender";
import { Session, sessions } from "../../utils/session";
import { registerCalender } from "./calendar/registerCalender";
import { checkCalenderUrl } from "./calendar/checkCalenderUrl";
import { getTasks } from "./tasks/getTasks";

export const messagesTextUseCase = async (event: MessageEvent) => {
  const { text } = event.message as TextEventMessage;

  if (text == "課題一覧") {
    await getTasks(event);
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
