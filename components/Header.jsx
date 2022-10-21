import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

import { HeaderTag, Navbar } from "./styles/HeaderStyles";

const Header = () => {
  return (
    <HeaderTag>
      <Navbar>
        <div>
          <Link href="/">
            <span>Budtenders</span>
          </Link>
        </div>
        <SearchBar />
      </Navbar>
    </HeaderTag>
  );
};

export default Header;
