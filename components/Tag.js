import React from "react";

const Tag = ({ children, onClick, ...props }) => {
  return (
    <div
      onClick={onClick}
      {...props}
      className="transition duration-500 ease hover:bg-white inline-block bg-gray-quote rounded-full px-8 py-1 cursor-pointer mb-3 mr-3 font-bold"
    >
      {children}
    </div>
  );
};

export default Tag;
