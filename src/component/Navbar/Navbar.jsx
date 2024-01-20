import React from "react";
import HashnodeLogo from "../SVG/HashnodeLogo";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="flex h-[80px] items-center justify-center border-b border-hashnodeBorder bg-hashnodeDarkBlue py-5">
      <div className="w-full">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4">
          {/* Hashnode logo  */}
          <div className="w-[180px]">
            <HashnodeLogo />
          </div>
          {/* nav links  */}
          <div className="text-hashnodeText flex w-full items-center justify-center gap-5 text-[.875rem] font-semibold">
            <a
              href="/"
              className="rounded-full border-[2px] border-transparent px-5 py-2 hover:border-hashnodeBorder active:outline active:outline-[3px] active:outline-offset-2 active:outline-hashnodeLightBlue"
            >
              My Feed
            </a>
            <a
              href="/"
              className="rounded-full border-[2px] border-transparent px-5  py-2 hover:border-hashnodeBorder active:outline active:outline-[3px] active:outline-offset-2 active:outline-hashnodeLightBlue"
            >
              Discussions
            </a>
            <a
              href="/"
              className="rounded-full border-[2px] border-transparent px-5  py-2 text-hashnodeLightBlue hover:border-hashnodeBorder active:outline active:outline-[3px] active:outline-offset-2 active:outline-hashnodeLightBlue"
            >
              Headless
            </a>
            <a
              href="/"
              className="flex items-center justify-center rounded-full border-[2px] border-transparent px-5 py-2 hover:border-hashnodeBorder active:outline active:outline-[3px] active:outline-offset-2 active:outline-hashnodeLightBlue"
            >
              <span className="">More</span>
              <IoIosArrowDown />
            </a>
          </div>
          {/* search, login, signup  */}
          <div className="border"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
