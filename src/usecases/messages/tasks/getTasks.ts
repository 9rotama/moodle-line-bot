import axios from "axios";
import { parseICS } from "node-ical";

import { Event, Task } from "../../../types/tasks";
import { extractTaskName } from "../../../utils/taskSummary";

const eventToTask = (event: Event) => {
  const submissionTaskName = extractTaskName(event.summary);

  const category = event.categories[0];
  const match = category.match(/^([A-Za-z0-9]+)_/);
  const course = match ? match[1] : undefined;

  const task: Task = {
    uid: event.uid,
    summary: submissionTaskName ? submissionTaskName : event.summary,
    deadline: event.end,
    course: course,
  };
  return task;
};

export const getTasks = async (calendarUrl: string): Promise<Task[]> => {
  const { data } = await axios.get(calendarUrl);
  const calendar = parseICS(data);

  const calendarComponents: (Task | undefined)[] = Object.keys(calendar).map(
    (e) =>
      calendar[e].type == "VEVENT"
        ? eventToTask(calendar[e] as Event)
        : undefined
  );

  const filteredTasks: Task[] = calendarComponents.filter(
    (task): task is Task => task !== undefined
  );
  return filteredTasks;
};
