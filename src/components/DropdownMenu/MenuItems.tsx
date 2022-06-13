import React, { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";
import "./Menu.scss";

type Props = {
  title: string;
  items: { title: string }[];
};

const MenuItems = ({ title, items }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu-items" ref={ref} >
      <p className="menu-items__subtitle" >Select</p>
      <button
        type="button"
        className="menu-items__title"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {title}{" "}
      </button>
      <Dropdown submenus={items} dropdown={dropdown} />
    </li>
  );
};

export default MenuItems;
