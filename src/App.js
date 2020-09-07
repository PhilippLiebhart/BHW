import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home";
import Lokal from "./components/Lokal";
import Speisekarte from "./components/Speisekarte/Speisekarte";
import Getraenke from "./components/Getraenke";
import Kontakt from "./components/Kontakt";
import Impressum from "./components/Impressum";

import ornamentRow from "../src/images/Ornament_row.png";
import ornamentBottom from "../src/images/Ornament_row_bottom.png";

function App() {
  return (
    <div className="contentWrapper">
      <section className="hero header-image is-small">
        <div className="hero-head mb-0">
          <Navigation />
        </div>
      </section>
      <section className="section pb-0 pt-0">
        <div className="container">
          <div className="column pl-6 pr-6 pb-0 pt-0 mb-0 mt-0">
            <figure className="image is-900by76">
              <img src={ornamentRow} alt="Bratwurscht Ornament" />
            </figure>
          </div>
        </div>
      </section>
      <section className="section" className="pb-0">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lokal" exact component={Lokal} />
            <Route path="/speisekarte" exact component={Speisekarte} />
            <Route path="/getraenke" exact component={Getraenke} />
            <Route path="/kontakt" exact component={Kontakt} />
            <Route path="/impressum" exact component={Impressum} />
          </Switch>
        </div>
      </section>
      <div className="container">
        <div className="column pl-6 pr-6">
          <figure className="image mt-0 is-900by76">
            <img src={ornamentBottom} alt="Bratwurscht Ornament" />
          </figure>
        </div>
      </div>
      <section className="section">
        <div className="footer has-text-centered has-text-white mb-0 mt-0 pb-4 pt-4">
          <p className="text ">
            <strong>Bratwurstherzl</strong> · Dreifaltigkeitsplatz 1· 80331
            München· <strong>Tel.</strong> 089-295113 · <strong>Fax</strong>{" "}
            089-29163751 · <strong>Email: </strong>
            mail@bratwurstherzl.de ·<strong> Öffnungszeiten:</strong> Montag bis
            Samstag von 10.00 bis 23.00 Uhr ·{" "}
            <strong>Sonn- und Feiertags haben wir geschlossen</strong>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
