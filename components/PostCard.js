import React from "react";
import moment from "moment";
import Link from "next/link";
import Tag from "./Tag";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 lg:p-8 mb-8">
      <h3 className="transition duration-700 text-center mb-8 cursor:pointer hover:text-pink-600 font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <div className="block lg:flex text-center items-center mb-4 w-full px-4 lg:px-10">
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-lg text-gray-700 font-normal px-4 lg:px-10 mb-8">
        {post.excerpt}
      </p>
      <div className="flex flex-wrap px-4 lg:px-10">
        {post.categories.map((category) => {
          return <Tag key={category.name}>{category.name}</Tag>;
        })}
      </div>
    </div>
  );
};

export default PostCard;
