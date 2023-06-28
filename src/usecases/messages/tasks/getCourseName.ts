import courseList from "../../../../assets/courseList.json";

export const getCourseName = (courseId: string | undefined) => {
  const courses: { [key: string]: string } = courseList;
  let courseName: string;
  if (courseId && courseId in courseList) {
    courseName = `${courseId} ${courses[courseId]}`;
  } else if (courseId) {
    courseName = `${courseId} コース名不明`;
  } else {
    courseName = `コース名不明`;
  }
  return courseName;
};
