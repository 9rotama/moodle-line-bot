import { prisma } from "../../db/db";

export const registerCalender = async (userId: string, calenderUrl: string) => {
  await prisma.user.create({
    data: {
      id: userId,
      calenderUrl: calenderUrl,
    },
  });
};
