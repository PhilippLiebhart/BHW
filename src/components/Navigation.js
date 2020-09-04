import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = (props) => {
  return (
    <div className="mb-6">
      <nav className="navbar is-transparent is-fixed-top" role="navigation">
        <div className="navbar-brand">
          <NavLink
            exact
            activeClassName="activeLink"
            className="navbar-item"
            to="/"
          >
            <img
              src="http://www.bratwurstherzl.de/images/logoklein.gif"
              alt="Bratwurscht Herzl Logo"
            />
          </NavLink>

          <NavLink
            exact
            activeClassName="activeLink"
            className="navbar-item"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            exact
            activeClassName="activeLink"
            className="navbar-item"
            to="/lokal"
          >
            Unser Lokal
          </NavLink>
          <NavLink
            exact
            activeClassName="activeLink"
            className="navbar-item"
            to="/speisekarte"
          >
            Speisekarte
          </NavLink>
          <NavLink
            exact
            activeClassName="activeLink"
            className="navbar-item"
            to="/getraenke"
          >
            Getränkekarte
          </NavLink>
          <NavLink
            exact
            activeClassName="activeLink"
            className="navbar-item"
            to="/kontakt"
          >
            Kontakt
          </NavLink>
          <NavLink
            exact
            activeClassName="activeLink"
            className="navbar-item"
            to="/impressum"
          >
            Impressum
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
