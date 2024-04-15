import CompleteCourses from "@/components/template/courses/CompleteCourses";
import React from "react";
async function getData() {
  const res = await fetch("https://bayan.savvyhost.io/api/courses", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const CoursesPage = async () => {
  const data = await getData();

  return (
    <>
      <CompleteCourses data={data} />
    </>
  );
};

export default CoursesPage;
