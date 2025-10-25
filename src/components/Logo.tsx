import { cn } from "@/lib/utils";
import { teardownTraceSubscriber } from "next/dist/build/swc/generated-native";
import Link from "next/link";
import React from "react";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl text-shop-black font-black tracking-wider uppercase hover:text-shop-grey hoverEffect group font-sans",
          className
        )}
      >
        A2
        <span
          className={cn("text-shop-red group-hover:text-shop-pink", spanDesign)}
        >
          Z
        </span>
        ed.
      </h2>
    </Link>
  );
};
export default Logo;
