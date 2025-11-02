import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div>
        <Title>
          Big Christmas Sale!!
          <br />
          Everything You Want.
          <br />
          Prices You’ll Love.
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_Xmas_RED text-white px-10 py-3 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_Xmas_RED hoverEffect"
        >
          Shop Xmas Sale Now
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default HomeBanner;
