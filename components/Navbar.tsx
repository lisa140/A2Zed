import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import Carticon from "./Carticon";
import Favourites from "./Favourites";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import AuthButtons from "./AuthButtons";

const Navbar = async () => {
  const user = await currentUser();
  console.log(user, "user");
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-lightColor">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <NavMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <Carticon />
          <Favourites />
          <AuthButtons />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
