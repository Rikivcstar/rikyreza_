import React from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { MdFileDownload } from "react-icons/md";

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLink containerStyles=" flex flex-col gap-8" />
        <button className="btn btn-lg btn-tertiary   mb-16">
          <div className="flex items-center gap-3">
            <span>Download CV</span>
            <MdFileDownload className="text-xl" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default MainNav;
