import React from "react";
import MenuLevel from "./MenuLevel";
import './index.less'

const menuitems = [
  {
    text: "Test 1",
    url: "http://qq.com",
    submenu: [
      {
        text: "1 Child Test 1",
        url: "http://qq.com",
      },
      {
        text: "1 Child Test 2",
        url: "http://qq.com",
      },
    ],
  },
  {
    text: "Test 2",
    url: "http://qq.com",
    submenu: [
      {
        text: "2 Child Test 1",
        url: "http://qq.com",
      },
      {
        text: "2 Child Test 2",
        url: "http://qq.com",
      },
    ],
  },
  {
    text: "Test 3",
    url: "http://qq.com",
    submenu: [],
  },
];

class Menus extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenuItem: -1,
      showSubMenuItem: -1,
    };
  }

  handleMenuLevelHover = (index) => {
    this.setState({ showMenuItem: index });
  };

  handleMenuLevelLeave = () => {
    this.setState({ showMenuItem: -1 });
  };

  handleSubMenuLevelHover = (index, e) => {
    this.setState({
      showMenuItem: index,
      showSubMenuItem: +e.target.attributes.getNamedItem("data-id").value,
    });
  };

  handleSubMenuLevelLeave = (e) => {
    this.setState({ showSubMenuItem: -1 });
  };

  render() {
    return (
      <ul>
        {menuitems.map((level, index) => (
          <MenuLevel
            text={level.text}
            url={level.url}
            key={index}
            index={index}
            onMouseOver={() => {
              this.handleMenuLevelHover(index);
            }}
            onMouseLeave={this.handleMenuLevelLeave}
            onSubItemMouseOver={(e) => {
              this.handleSubMenuLevelHover(index, e);
            }}
            onSubItemMouseLeave={this.handleSubMenuLevelLeave}
            showSubMenuItem={this.state.showSubMenuItem}
            showMenuItem={this.state.showMenuItem}
          >
            {level.submenu}
          </MenuLevel>
        ))}
      </ul>
    );
  }
}

export default Menus;
