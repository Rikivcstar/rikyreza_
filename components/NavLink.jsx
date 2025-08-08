"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const NavLink = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        const charLenght = link.name.length;
        const lineWidht = charLenght > 5 ? "after:w-[120%]" : "after:w-[90%]";
        console.log(charLenght);
        return (
          <Link
            href={link.path}
            key={index}
            className={`relative text-white text-lg uppercase 
          ${
            isActive &&
            `after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidht} after:h-[4px] after:bg-accent after:-translate-y-1/2 after:z-0`
          }`}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLink;
