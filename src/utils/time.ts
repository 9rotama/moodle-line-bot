export const timeZone = "Asia/Tokyo";

export const formatDisplayDeadline = (date: Date) => {
  const formattedDate = date.toLocaleString("en-US", { timeZone: timeZone });
  return formattedDate;
};

export const formatDisplayRemainingTime = (date: Date, untilDate: Date) => {
  const remainTime = untilDate.getTime() - date.getTime();
  const hours = Math.floor(remainTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));

  const suffix = remainTime < 0 ? "後" : "前";
  const formattedTime = `${Math.abs(hours)}時間${Math.abs(minutes)}分${suffix}`;
  return formattedTime;
};
