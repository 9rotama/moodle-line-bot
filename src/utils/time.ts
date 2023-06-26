export const timeZone = "Asia/Tokyo";

export const formatDisplayDeadline = (date: Date) => {
  const formatDate = date.toLocaleString("en-US", { timeZone: timeZone });
  return formatDate;
};
