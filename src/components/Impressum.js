import React from "react";

const Impressum = (props) => {
  return (
    <div>
      <div className="section mb-0 pb-0">
        <div className="content">
          <h1 className="title">Impressum</h1>
        </div>
      </div>
      <div className="section mt-0">
        <div className="container">
          <div className="content">
            <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
              <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
                <p className="pb-0 mb-0">Hertha Uhl Betriebs GmbH</p>
                <p className="pb-0 mb-0"> Dreifaltigkeitsplatz 1</p>
                <p className="pb-0 mb-3">80331 München</p>
                <p className="pb-0 mb-0">Tel. 089-295113</p>
                <p className="pb-0 mb-3">Fax 089-29163751</p>
                <p className="pb-0 mb-3">Email: mail@bratwurstherzl.de</p>

                <p className="">
                  <strong>(Tischreservierungen nur telefonisch)</strong>
                </p>
                <p className="pb-0">Internet: www.bratwurstherzl.de</p>
              </div>
              <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
                <p className="pb-0 mb-3">
                  Vertretungsberechtigter Geschäftsführerin:
                </p>
                <p className="pb-0 mb-0">Hertha Uhl</p>
                <p className="pb-0 mb-0">
                  Umsatzsteueridentnummer: DE 25 72 32 187
                </p>
                <p className="pb-0 mb-0"> Steuernummer: 143 / 145 / 806 81 </p>
                <p className="pb-0 mb-0">Handelsregister : HRB 170492</p>
                <p className="pb-0 mb-0"> Registergericht München</p>
                <p className="pb-0 mb-0">Aufsichtsbehörde:</p>
                <p className="pb-0 mb-0">
                  Landeshauptstadt München, Kreisverwaltungsreferat
                  Datenschutzerklärung Haftungsausschluss
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
