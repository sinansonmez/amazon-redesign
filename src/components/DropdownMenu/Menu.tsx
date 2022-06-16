import React from "react";
import MenuItems from "./MenuItems";
import "./Menu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {
  menuItems: Array<{title: string}>;
  title: string;
  subtitle: string
  burgerMenuNeeded?: boolean;
}

const Menu = ({menuItems, title, subtitle, burgerMenuNeeded = false}: Props) => {

  return (
    <div className="menu-container">
      {burgerMenuNeeded ? <GiHamburgerMenu /> : null}
      <ul className="menus">
        <MenuItems 
          title={title}
          subtitle={subtitle}
          items={menuItems} 
          />
      </ul>
      <MdKeyboardArrowDown size='1.5em' />
    </div>
  );
};

export default Menu;
