import { FlexBox, FlexButton, FlexMessage, FlexSeparator } from "@line/bot-sdk";
import { Task } from "../../../types/tasks";
import { formatDisplayDeadline } from "../../../utils/time";

const DoneButton = (task: Task): FlexButton => {
  const tweetText: string = task.summary;
  return {
    type: "button",
    action: {
      type: "uri",
      label: "完了",
      uri: `https://twitter.com`,
    },
    color: "#0366fc",
    style: "primary",
    gravity: "center",
  };
};

const TaskBox = (task: Task): FlexBox => {
  return {
    type: "box",
    layout: "horizontal",
    contents: [
      {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: task.summary,
          },
          {
            type: "text",
            text: task.course ? task.course : "",
            size: "12px",
          },
          {
            type: "text",
            text: formatDisplayDeadline(task.deadline) + "まで",
            size: "14px",
            weight: "bold",
          },
        ],
        width: "230px",
      },
      DoneButton(task),
    ],
    spacing: "10px",
  };
};

const Separator = (): FlexSeparator => {
  return {
    type: "separator",
  };
};

export const msgTasks = (tasks: Task[]): FlexMessage => {
  const taskBoxArray: (FlexBox | FlexSeparator)[] = [];

  tasks.forEach((e, i) => {
    const task = e;
    const taskBox = TaskBox(task);
    const separator = Separator();

    taskBoxArray.push(taskBox);

    // 最後の要素の後にはセパレーターを追加しない
    if (i !== tasks.length - 1) {
      taskBoxArray.push(separator);
    }
  });

  return {
    type: "flex",
    altText: "課題",
    contents: {
      type: "bubble",
      size: "giga",
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "課題",
            size: "20px",
            weight: "bold",
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        contents: taskBoxArray,
        spacing: "10px",
      },
    },
  };
};
