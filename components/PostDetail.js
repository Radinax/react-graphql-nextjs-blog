import React from "react";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        codeTagProps={{ style: { fontSize: "16px" } }}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 p-4 mb-8 border">
      <div className="px-4 lg:px-0">
        <div className="flex lg:items-center items-start mb-4 w-full lg:flex-row flex-col">
          <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              alt={post.author.name}
              height="30px"
              width="30px"
              unoptimized
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-gray-700 w-60">
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
      </div>
      <h1 className="my-4 lg:my-8 text-3xl font-semibold">{post.title}</h1>
      <ReactMarkdown
        className="whitespace-pre-wrap"
        remarkPlugins={[remarkGfm]}
        children={post.markdown}
        components={CodeBlock}
        escapeHtml={false}
      />
    </div>
  );
};

export default PostDetail;
