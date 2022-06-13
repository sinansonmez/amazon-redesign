import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { Context } from "../Context";
import Menu from "./DropdownMenu/Menu";

const Header = () => {
  const { cartItems } = useContext(Context);
  return (
    <header>
      <Link to="/">
        <img
          alt="amazon-logo"
          src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg"
        />
      </Link>
      <Menu />
      <img
        alt="avatar"
        className="rounded-avatar-small"
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
      />
      <Link to="/cart">
        <MdAddShoppingCart size="1.5em" />
      </Link>
    </header>
  );
};

export default Header;
