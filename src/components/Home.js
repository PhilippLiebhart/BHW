import React from "react";

import logo from "../images/BHW_logo_clean.svg";

const Home = (props) => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
              <h1 className="title is-3">Willkommen!</h1>
              <p className="text">
                Herzlich willkommen beim Bratwurstherzl am Viktualienmarkt Das
                traditionsreiche Haus wurde 1633 erstmals als Gaststätte erwähnt
                und ist seit 1901 als „Bratwurstherzl“ bekannt und beliebt.
                Wählen Sie aus unserer reichhaltigen, bayrisch-fränkischen
                Speisekarte, oder geniessen Sie eines unserer täglich
                wechselnden Mittagsgerichte.
              </p>
            </div>
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
              <figure className="image image is-4by3">
                <img src={logo} style={{}} alt="Bratwurscht Herzl Logo" />
              </figure>
            </div>
            <div className="column is-full-mobile is-full-desktop is-full-tablet is-full-widescreen is-full-fullhd">
              <figure className="image is-fullwidth">
                <img
                  src={require("../images/fotos/Lokal_aussen_3.jpg")}
                  alt="Bratwurscht Herzl Logo"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
