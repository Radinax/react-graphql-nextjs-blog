import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const Author = ({ author }) => {
  const introduction = (
    <ReactMarkdown
      className="whitespace-pre-wrap link"
      children={author.introduction}
    />
  );

  const bio = <p className="text-lg">{author.bio}</p>;
  return (
    <div className="text-center mt-12 mb-8 p-12 relative rounded-lg bg-gray-quote text-gray-darkest border-l-8 border-black border-r-8">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="my-4 text-xl font-bold">{author.name}</h3>
      {author.bio ? bio : introduction}
    </div>
  );
};

export default Author;
