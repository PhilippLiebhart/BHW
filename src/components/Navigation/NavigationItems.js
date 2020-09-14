import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItems.css";

const NavigationItems = (props) => {
  return (
    <React.Fragment>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/"
        onClick={props.clicked}
      >
        Home
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/lokal"
        onClick={props.clicked}
      >
        Unser Lokal
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/speisekarte"
        onClick={props.clicked}
      >
        Speisekarte
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/getraenke"
        onClick={props.clicked}
      >
        Getränkekarte
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/kontakt"
        onClick={props.clicked}
      >
        Kontakt
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/gutschein"
        onClick={props.clicked}
      >
        Gutschein
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/impressum"
        onClick={props.clicked}
      >
        <h1 className="title is-6">Impressum</h1>
      </NavLink>
    </React.Fragment>
  );
};

export default NavigationItems;
