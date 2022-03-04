import React from "react";

export default function Tags() {
  const tags = [
    "hearted",
    "never",
    "contants",
    "abilities",
    "promotion",
    "never",
    "contants",
    "abilities",
    "Enjoyment",
    "promotion",
    "hearted",
    "go",
    "contants",
    "Enjoyment",
    "never",
    "never",
  ];
  return (
    <div>
      <h1 className="text__primary border-b-2 pb-3 border__primary font-bold">
        TAGS
      </h1>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <p
            className="py-1 px-3 rounded"
            key={index}
            style={{ color: "#707070", backgroundColor: "#E8E8E8" }}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
