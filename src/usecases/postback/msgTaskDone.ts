import { FlexMessage } from "@line/bot-sdk";
import { Task } from "../../types/tasks";
import { getCourseName } from "../messages/tasks/getCourseName";
import { formatDisplayRemainingTime } from "../../utils/time";

export const msgTaskDone = (task: Task): FlexMessage => {
  const courseName = getCourseName(task.course);
  const nowTime = new Date();
  const deadlineRemainTime = formatDisplayRemainingTime(nowTime, task.deadline);

  const shareText = `コース「${courseName}」の課題「${task.summary}」を締切${deadlineRemainTime}に完了しました。`;
  const twitterShareUrI = encodeURI(
    `https://twitter.com/intent/tweet?text=${shareText}&hashtags=moodleBot`
  );

  return {
    type: "flex",
    altText: "タスク完了",
    contents: {
      type: "bubble",
      size: "mega",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "image",
            url: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Check%20mark%20button/3D/check_mark_button_3d.png",
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "お疲れ様です！",
            size: "20px",
            weight: "bold",
          },
          {
            type: "text",
            text: shareText,
            wrap: true,
          },
          {
            type: "button",
            action: {
              type: "uri",
              label: "ツイートする",
              uri: twitterShareUrI,
            },
            color: "#0366fc",
            height: "sm",
          },
        ],
        spacing: "10px",
      },
    },
  };
};
