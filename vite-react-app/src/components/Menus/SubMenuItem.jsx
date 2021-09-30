import React from "react";

const SubMenuItem = (props) => (
  <a
    href={props.url}
    data-id={props.index}
    onMouseOver={props.onMouseOver}
    onMouseLeave={props.onMouseLeave}
    className={props.showSubMenuItem === props.index ? "submenuitem-hover" : ""}
  >
    {props.text}
  </a>
);

export default SubMenuItem;
