import React from "react";

const Speise = (props) => {
  console.log("HULAAA", props.beschreibung);
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <figure className="image is-16by9">
                <img src={`${props.imgURL}`} alt="" />
              </figure>
              <h6 className="subtitle is-5">{props.preis} €</h6>
            </div>{" "}
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <h2 className="title is-5">{props.name}</h2>
              {props.beschreibung}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Speise;
