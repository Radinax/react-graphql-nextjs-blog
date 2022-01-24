import React, { useState, useEffect } from "react";
import Link from "next/link";
import Tag from "./Tag";

import { getCategories } from "../services";

const Categories = ({ isDetail = false }) => {
  const [categories, setCategories] = useState([]);

  const overflowScrollClass = isDetail
    ? "h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 hover:scrollbar-thumb-{gray-900}"
    : "";

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      <div className={`flex flex-wrap ${overflowScrollClass}`}>
        {categories.map((category, index) => (
          <Link key={category.slug + index} href={`/category/${category.slug}`}>
            <Tag className="transition duration-500 ease hover:bg-white inline-block bg-gray-quote rounded-full px-8 py-3 cursor-pointer mb-3 mr-3 font-bold">
              {category.name}
            </Tag>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
