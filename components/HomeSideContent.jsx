import React from "react";
import PopularPosts from "./PopularPosts";
import OurPics from "./OurPics";
import Categories from "./Categories";
import RandomPost from "./RandomPost";

export default function HomeSideContent() {
  return (
    <div className="my-6 pl-4 space-y-10">
      <PopularPosts></PopularPosts>
      <OurPics></OurPics>
      <Categories></Categories>
      <RandomPost></RandomPost>
    </div>
  );
}
