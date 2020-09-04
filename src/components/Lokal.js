import React from "react";

const Lokal = (props) => {
  return (
    <div>
      <section className="section mt-6">
        <div className="container">
          <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <h3 className="title is-4">Tradition</h3>
              <h5 className="subtitle is-6">
                {" "}
                Das traditionsreiche Haus wurde 1633 erstmals als Gaststätte
                erwähnt und ist seit 1901 als „Bratwurstherzl“ bekannt und
                beliebt. Heute, erheblich erweitert, präsentiert sich diese
                Idylle fränkisch-bayrischer Gastlichkeit nach wie vor in seinem
                historischen Gewand
              </h5>
            </div>
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <figure className="image is-fullwidth">
                {" "}
                <img
                  src="http://www.bratwurstherzl.de/images/raum.jpg"
                  alt="Bratwurscht Herzl Logo"
                />
              </figure>
            </div>
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <h3 className="title is-4">Innenräume</h3>
              <h5 className="subtitle is-6">
                Der rechte Gastraum besteht aus einem bezaubernden 350 Jahre
                alten Backsteingewölbe, einer Mischung aus Kreuz- und Böhmischem
                Gewölbe. Hier werden täglich am offenen Buchenholzfeuer
                Rostbratwürstchen gegrillt..
              </h5>
            </div>
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <figure className="image is-fullwidth">
                <img
                  src="http://www.bratwurstherzl.de/images/gewoelbe.jpg"
                  alt="Bratwurscht Herzl Logo"
                />
              </figure>
            </div>

            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <h3 className="title is-4">Biergarten</h3>
              <h5 className="subtitle is-6">
                Bei schönem Wetter kann der Gast all unsere Köstlichkeit
                natürlich auch im gemütlichen Biergarten vor dem Haus genießen.
              </h5>
            </div>
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <figure className="image is-fullwidth">
                <img
                  src="http://www.bratwurstherzl.de/images/aussen.jpg"
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

export default Lokal;
