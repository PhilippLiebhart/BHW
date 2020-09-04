import React from "react";

const Kontakt = (props) => {
  return (
    <div>
      <div className="section mb-0 pb-0">
        <div className="content">
          <h1 className="title">Kontakt</h1>
        </div>
      </div>
      <div className="section mt-0">
        <div className="container">
          <div className="content">
            <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
              <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
                <p className="title is-5">Unsere Öffnungszeiten: </p>
                <p className="title">
                  Momentan: <span className="tag is-success">OPEN</span>
                  <span className="tag is-danger">CLOSED</span>
                </p>
                <p className="title is-4  mb-2 pb-0">
                  Montag bis Samstag: 10.00 bis 23.00 Uhr.
                </p>
                <p className="title is-4 mt-0 pt-0">
                  Sonn- und Feiertags: geschlossen
                </p>

                <p className="title is-6  mb-2 pb-0">
                  Warme Speisen aus der Küche gibt es bis 21.30 Uhr.{" "}
                </p>
                <p className="title is-6">
                  Gerichte vom Grill können Sie bis 22.30 Uhr bestellen.
                </p>
              </div>
              <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
                <strong>Anschrift:</strong>{" "}
                <p className="pb-0 mb-0">Bratwurstherzl</p>
                <p className="pb-0 mb-0">Dreifaltigkeitsplatz 1</p>
                <p className="pb-0 mb-3">80331 München</p>
                <p className="pb-0 mb-0">
                  <strong>Tel.:</strong> 089-295113
                </p>
                <p className="pb-0 mb-0">
                  <strong>Fax: </strong>089-29163751
                </p>
                <p className="pb-0 mb-0">
                  <strong>Email: </strong>mail@bratwurstherzl.de
                </p>
                <p className="pb-0 mb-0">
                  <strong>(Tischreservierungen nur telefonisch)</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
