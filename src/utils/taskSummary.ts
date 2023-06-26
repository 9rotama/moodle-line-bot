export const extractTaskName = (text: string) => {
  const start = text.indexOf("「") + 1;
  const end = text.indexOf("」の提出期限");

  if (start >= end || end === -1) {
    return null;
  }

  return text.slice(start, end);
};
