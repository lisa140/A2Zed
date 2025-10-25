import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import Carticon from "./Carticon";
import Favourites from "./Favourites";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="bg-shop-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between text-black">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <NavMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <Carticon />
          <Favourites />
          <SignIn />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
