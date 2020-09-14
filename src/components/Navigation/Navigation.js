import React, { useState } from "react";
import "./Navigation.css";

import { slide as Menu } from "react-burger-menu";
import logo from "../../images/BHW_Logo_schrift.png";
import NavigationItems from "./NavigationItems";

const Navigation = (props) => {
  const [state, setState] = useState({ menuOpen: false });

  const handleStateChange = (state) => {
    setState({ menuOpen: state.isOpen });
  };

  const closeMenu = () => {
    setState({ menuOpen: false });
  };

  return (
    <div className="mb-0">
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="burgerNavBar">
            <figure className="image">
              <img src={logo} alt="Bratwurscht Herzl Logo" />
            </figure>
            <Menu
              right
              isOpen={state.menuOpen}
              onStateChange={(state) => handleStateChange(state)}
            >
              <NavigationItems clicked={() => closeMenu()} />
            </Menu>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <figure className="image pr-5 ml-4">
            {" "}
            <img src={logo} alt="Bratwurscht Herzl Logo" />
          </figure>

          <div className="navbar-start">
            <NavigationItems />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
