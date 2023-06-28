import { JSDOM } from "jsdom";
import fs from "fs";

const url =
  "http://web-ext.u-aizu.ac.jp/official/curriculum/syllabus/1_J_000.html";

const fetchCourseName = async () => {
  const dom = await JSDOM.fromURL(url);
  const document = dom.window.document;

  const kamokus = Array.from(document.getElementsByClassName("kamoku"));
  const courseStrings = kamokus.map(
    (e) => e.getElementsByTagName("a")[0].innerHTML
  );
  let courses: { [key: string]: string } = {};
  courseStrings.forEach((e) => {
    const pattern = /^(\S+)\s(.+)$/;
    const match = e.match(pattern);
    if (match) {
      const courseId = match[1];
      const courseName = match[2];

      courses[courseId] = courseName;
    }
  });

  return courses;
};

fetchCourseName().then((courseNames) => {
  const jsonString = JSON.stringify(courseNames);
  console.log(fetchCourseName());

  fs.writeFile("assets/courseList.json", jsonString, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("ファイルに出力しました。");
  });
});
