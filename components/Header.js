import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto lg:px-10 px-2 mb-8">
      <div className="border-b w-full inline-block border-black-400 py-8">
        <div className="md:float-left block lg:text-left text-center">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl md:text-4xl">
              Adrian Programming Blog
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
