import React from "react";

const Speise = (props) => {
  return (
    <React.Fragment>
      <section className="section py-2 px-0 my-0 mx-0">
        <div className="container has-background-white-ter px-3 py-3">
          <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              <figure className="image is-16by9">
                <img src={`${props.imgURL}`} alt="" />
              </figure>
            </div>{" "}
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-one-quarter-widescreen is-one-quarter-fullhd">
              {" "}
              <h2 className="title is-4 mb-2 has-text-success-dark">
                {props.name}
              </h2>
              {props.beschreibung}
              <h6 className="has-text-weight-semibold	is-size-4 mt-3">
                {props.preis} €
              </h6>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Speise;
