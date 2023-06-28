import { VEvent } from "node-ical";

interface Task {
  uid: string;
  summary: string;
  deadline: Date;
  course: string | undefined;
}

interface Event extends VEvent {
  categories: string[];
}
