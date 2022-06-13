import React from "react";
import MenuItems from "./MenuItems";
import "./Menu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Menu = () => {
  const menuItems = [
    { title: "Books" },
    { title: "Fashion" },
    { title: "Electronics" },
  ];

  return (
    <div className="menu-container">
      <GiHamburgerMenu />
      <ul className="menus">
        <MenuItems title={"Select Category"} items={menuItems} />
      </ul>
      <MdKeyboardArrowDown size='1.5em' />
    </div>
  );
};

export default Menu;
