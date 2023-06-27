import { MessageEvent } from "@line/bot-sdk";
import { client } from "../../../bot";
import { Task } from "../../../types/tasks";
import { msgTasks } from "./msgTasks";

export const displayTasks = async (event: MessageEvent, tasks: Task[]) => {
  const msg = msgTasks(tasks);
  await client.replyMessage(event.replyToken, msg);
};
