import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { ALL_POSTS } from "./FilteredPost";

type Props = {
  selectedFeature: string;
  filteredCategories: string[];
  handleFeature: (feature: string) => void;
};
export default function FilterSelector({
  filteredCategories,
  handleFeature,
  selectedFeature,
}: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul>
        {filteredCategories.map((category) => (
          <li
            className={` cursor-pointer hover:text-sky-500 ${
              selectedFeature === category && "text-sky-600"
            }`}
            key={category}
            onClick={() => handleFeature(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
