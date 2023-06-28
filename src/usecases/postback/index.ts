import { PostbackEvent } from "@line/bot-sdk";
import { taskDone } from "./taskDone";

export const postbackUsecase = async (event: PostbackEvent) => {
  const data = event.postback.data;
  const separator = "-";
  const parts = data.split(separator);
  if (parts[0] == "taskDone") {
    await taskDone(event, parts.slice(1).join(separator));
  }
};
