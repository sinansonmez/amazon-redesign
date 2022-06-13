import React from "react";
import "./Menu.scss";

type Props = {
  submenus: { title: string }[];
  dropdown: boolean;
};

const Dropdown = ({ submenus, dropdown }: Props) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href="/#">{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
