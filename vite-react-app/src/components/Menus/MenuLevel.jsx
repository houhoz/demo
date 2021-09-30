import React from "react";
import SubMenuItem from "./SubMenuItem";

const MenuLevel = (props) => (
  <li
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
    className={props.showMenuItem === props.index ? "menu-hover" : ""}
  >
    <a href={props.url}>{props.text}</a>
    <div
      className={
        props.showMenuItem === props.index ? "submenu-show" : "submenu-hidden"
      }
    >
      {props.children.map((item, index) => (
        <SubMenuItem
          text={item.text}
          key={item.text + index}
          url={item.url}
          index={index}
          showSubMenuItem={props.showSubMenuItem}
          onMouseOver={props.onSubItemMouseOver}
          onMouseLeave={props.onSubItemMouseLeave}
        />
      ))}
    </div>
  </li>
);

export default MenuLevel;
