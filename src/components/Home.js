import React from "react";

import logo from "../images/BHW_Logo.png";
import aussen from "../images/bhw_aussen.jpg";

const Home = (props) => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
              <h1 className="title is-5">Willkommen!</h1>
              <p className="text">
                Herzlich willkommen beim Bratwurstherzl am Viktualienmarkt Das
                traditionsreiche Haus wurde 1633 erstmals als Gaststätte erwähnt
                und ist seit 1901 als „Bratwurstherzl“ bekannt und beliebt.
                Wählen Sie aus unserer reichhaltigen, bayrisch-fränkischen
                Speisekarte, oder geniessen Sie eines unserer täglich
                wechselnden Mittagsgerichte.
                <p className="text mt-6">
                  <strong>Zur Speisekarte</strong>
                </p>
              </p>
            </div>
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
              <figure className="image is-fullwidth">
                <img src={logo} alt="Bratwurscht Herzl Logo" />
              </figure>
            </div>
            <div className="column is-full-mobile is-full-desktop is-full-tablet is-full-widescreen is-full-fullhd">
              <figure className="image is-fullwidth">
                <img src={aussen} alt="Bratwurscht Herzl Logo" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
