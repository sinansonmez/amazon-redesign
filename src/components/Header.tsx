import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon/CartIcon";
import Menu from "./DropdownMenu/Menu";
import SearchBox from "./SearchBox/SearchBox";

const Header = () => {
  const menuItems = [
    { title: "Books" },
    { title: "Fashion" },
    { title: "Electronics" },
  ];

  return (
    <header>
      <Link to="/">
        <img
          alt="amazon-logo"
          src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg"
        />
      </Link>
      <Menu
        menuItems={menuItems}
        burgerMenuNeeded={true}
        title={'Category'}
        subtitle={'Select'}
      />
      <SearchBox/>
      <img
        alt="avatar"
        className="rounded-avatar-small"
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
      />
        <Menu
        menuItems={menuItems}
        title={'Hello, Sinan'}
        subtitle={'Account & Lists'}
      />
      <CartIcon />
    </header>
  );
};

export default Header;
