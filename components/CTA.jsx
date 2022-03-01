import React from "react";

export default function CTA() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-2">
      <h1 style={{ color: "#919192" }} className="text-2xl">
        To Get Latest News & Further Update
      </h1>
      <h1 className="text__primary text-2xl">Subscribe Our Newsletter</h1>
      <button className="text-white bg__primary mt-4 p-2 px-8 rounded-full">
        Subscribe
      </button>
    </div>
  );
}
