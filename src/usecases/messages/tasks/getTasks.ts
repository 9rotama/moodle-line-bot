import { MessageEvent } from "@line/bot-sdk";
import axios from "axios";
import { parseICS } from "node-ical";

import { prisma } from "../../../db/db";
import { client } from "../../../bot";
import { msgUserNotFound } from "./msgUserNotFound";
import { Event, Task } from "./tasks";

const eventToTask = (event: Event) => {
  const task: Task = {
    uid: event.uid,
    summary: event.summary,
    deadline: event.end,
    course: event.categories ? event.categories[0] : undefined,
  };
  return task;
};

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

  const { data } = await axios.get(user.calenderUrl);
  const calender = parseICS(data);

  const tasks = Object.keys(calender)
    .map((e) =>
      calender[e].type == "VEVENT"
        ? eventToTask(calender[e] as Event)
        : undefined
    )
    .filter((e) => e); // undefined を除く
  console.log(tasks);

  return tasks;
};
