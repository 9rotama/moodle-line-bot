import { PostbackEvent } from "@line/bot-sdk";
import { prisma } from "../../db/db";
import { client } from "../../bot";
import { msgUserNotFound } from "../messages/tasks/msgUserNotFound";
import { getTasks } from "../messages/tasks/getTasks";
import { msgTaskDone } from "./msgTaskDone";

export const taskDone = async (event: PostbackEvent, taskId: string) => {
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
  const targetTask = tasks.find((e) => e.uid === taskId);

  if (targetTask) {
    await client.replyMessage(event.replyToken, msgTaskDone(targetTask));
  } else {
    throw new Error("task is not found");
  }
};
