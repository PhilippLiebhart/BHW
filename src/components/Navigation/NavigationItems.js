import React from "react";
import { NavLink } from "react-router-dom";

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
        <h1 className="title is-6">Home</h1>
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/lokal"
        onClick={props.clicked}
      >
        <h1 className="title is-6">Unser Lokal</h1>
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/speisekarte"
        onClick={props.clicked}
      >
        <h1 className="title is-6">Speisekarte</h1>
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/getraenke"
        onClick={props.clicked}
      >
        <h1 className="title is-6">Getränkekarte</h1>
      </NavLink>
      <NavLink
        exact
        activeClassName="activeLink"
        className="navbar-item"
        to="/kontakt"
        onClick={props.clicked}
      >
        <h1 className="title is-6">Kontakt</h1>
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
