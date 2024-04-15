import ArticlesImportant from "@/components/template/articles/ArticlesImportant";
import React from "react";

async function getData() {
  const res = await fetch("https://bayan.savvyhost.io/api/posts",{  cache: "no-store"});
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const ArticlesPage = async () => {
  const data = await getData();
  return <ArticlesImportant data={data?.data} />;
};

export default ArticlesPage;
