import React from "react";

export default function Categories() {
  const categories = [
    { name: "List Style", count: 13 },
    { name: "Business", count: 3 },
    { name: "Design", count: 3 },
    { name: "Photography", count: 6 },
    { name: "Travel", count: 6 },
    { name: "Nature", count: 3 },
    { name: "Places", count: 3 },
    { name: "Fashion", count: 4 },
  ];
  return (
    <div>
      <h1 className="text__primary border-b-2 pb-3 border__primary">
        CATEGORIES
      </h1>
      {categories.map((category) => (
        <div
          className="py-4"
          key={category.name}
          style={{ borderBottom: "1px dashed grey" }}
        >
          <p style={{ color: "#4D4F5C" }}>
            {category.name} ({category.count})
          </p>
        </div>
      ))}
    </div>
  );
}
