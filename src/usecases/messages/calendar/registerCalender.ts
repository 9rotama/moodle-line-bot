import { MessageEvent, TextEventMessage } from "@line/bot-sdk";
import { prisma } from "../../../db/db";
import { checkCalenderUrl } from "./checkCalenderUrl";
import { client } from "../../../bot";
import { msgTextCalenderInvalidUrl } from "./msgTextCalenderInvalidUrl";
import { msgTextCalenderSuccess } from "./msgTextCalenderSuccess";
import { sessions } from "../../../utils/session";

export const registerCalender = async (event: MessageEvent) => {
  const userId = event.source.userId;
  if (!userId) throw new Error("userId is undefined");
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const { text } = event.message as TextEventMessage;
  if (!checkCalenderUrl(text)) {
    await client.replyMessage(event.replyToken, msgTextCalenderInvalidUrl);
    return;
  }

  if (user) {
    await client.replyMessage(event.replyToken, msgTextCalenderSuccess(true));
    prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        calenderUrl: text,
      },
    });
  } else {
    await prisma.user.create({
      data: {
        id: userId,
        calenderUrl: text,
      },
    });
    await client.replyMessage(event.replyToken, msgTextCalenderSuccess(false));
  }
  const index = sessions.indexOf({ userId: userId, type: "registerCalender" });
  sessions.splice(index, 1);
};
