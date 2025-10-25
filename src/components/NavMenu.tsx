"use client";
import Link from "next/link";
import React from "react";
import { navData } from "./constants/data";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-normal text-shop-black ">
      {navData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={
            "hover:text-shop-red hoverEffect relative group ${pathname === item?.href && 'text-shop-red'}"
          }
        >
          {item?.title}
          <span
            className={
              "absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop-red group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathname === item?.href && 'text-shop-red'}"
            }
          />
          <span
            className={
              "absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop-red group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathname === item?.href && 'text-shop-red'}"
            }
          />
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
