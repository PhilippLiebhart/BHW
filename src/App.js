import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Lokal from "./components/Lokal";
import Speisekarte from "./components/Speisekarte";
import Getraenke from "./components/Getraenke";
import Kontakt from "./components/Kontakt";
import Impressum from "./components/Impressum";

function App() {
  return (
    <div className="contentWrapper">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/lokal" exact component={Lokal} />
        <Route path="/speisekarte" exact component={Speisekarte} />
        <Route path="/getraenke" exact component={Getraenke} />
        <Route path="/kontakt" exact component={Kontakt} />
        <Route path="/impressum" exact component={Impressum} />
      </Switch>
      <div className="footer has-text-centered mb-0 mt-0 pb-4 pt-4">
        Bratwurstherzl · Dreifaltigkeitsplatz 1· 80331 München· Tel. 089-295113
        · Fax 089-29163751 · Email: mail@bratwurstherzl.de Öffnungszeiten:
        Montag bis Samstag von 10.00 bis 23.00 Uhr · Sonn- und Feiertags haben
        wir geschlossen
      </div>
    </div>
  );
}

export default App;
