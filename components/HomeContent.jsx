import React from "react";
import HomePosts from "./HomePosts";
import HomeSideContent from "./HomeSideContent";

export default function HomeContent() {
  return (
    <div
      className="p-8 flex w-full md:w-2/3 mx-auto flex-wrap"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="w-full md:w-3/5">
        <HomePosts />
      </div>
      <div className="w-full md:w-1/3">
        <HomeSideContent></HomeSideContent>
      </div>
    </div>
  );
}
