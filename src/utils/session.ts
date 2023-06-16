export type Session = {
  userId: string;
  type: "registerCalender" | "notifySetting";
};

export const sessions: Session[] = [];
