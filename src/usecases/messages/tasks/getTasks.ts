import { MessageEvent } from "@line/bot-sdk";
import { prisma } from "../../../db/db";
import { client } from "../../../bot";
import { msgUserNotFound } from "./msgUserNotFound";
import axios from "axios";

export const getTasks = async (event: MessageEvent) => {
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

  const icsData = await axios.get(user.calenderUrl);
};
