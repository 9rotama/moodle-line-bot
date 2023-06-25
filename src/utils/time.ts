import { utcToZonedTime, format } from "date-fns-tz";

export const timeZone = "Asia/Tokyo";

export const formatTime = (date: Date) => {
  const formatDate = date.toLocaleString("en-US", { timeZone: timeZone });
  return formatDate;
};
