import React from "react";
import PopularPosts from "./PopularPosts";
import OurPics from "./OurPics";

export default function HomeSideContent() {
  return (
    <div className="my-6 pl-4 space-y-10">
      <PopularPosts></PopularPosts>
      <OurPics></OurPics>
    </div>
  );
}
