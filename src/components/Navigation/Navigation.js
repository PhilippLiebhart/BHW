import React, { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";
import logo from "../../images/BWH_Logo_Schrift.svg";
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
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="burgerNavBar">
            <NavLink exact to="/" onClick={props.clicked}>
              <figure className="image pr-5 ml-4">
                <img src={logo} alt="Bratwurscht Herzl Logo" />
              </figure>
            </NavLink>
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
          <NavLink exact to="/" onClick={props.clicked}>
            <figure className="image pr-5 ml-4">
              {" "}
              <img
                src={logo}
                alt="Bratwurscht Herzl Logo"
                style={{ width: "auto", height: "118px" }}
              />
            </figure>
          </NavLink>

          <div className="navbar-start">
            <NavigationItems />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
