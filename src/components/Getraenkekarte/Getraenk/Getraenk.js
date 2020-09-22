import React from "react";
import "./Getraenk.css";

const Drink = (props) => {
  return (
    <React.Fragment>
      <section className="section py-2 px-0 my-0 mx-0">
        <div className="container has-background-white-ter px-3 py-3">
          <div className="columns is-multiline is-vcentered is-mobile is-desktop is-tablet">
            <div className="column is-full-mobile is-half-desktop is-half-tablet is-half-widescreen is-half-fullhd">
              {" "}
              <h2 className="title is-4 mb-2 has-text-success-dark">
                {props.name}
              </h2>
              {props.beschreibung}
            </div>{" "}
            <div className="column is-narrow">
              {props.preis ? (
                <span
                  style={{
                    backgroundColor: "white",
                    padding: "5px",
                    color: "black",
                  }}
                >
                  ??? ml{" "}
                  <span
                    style={{
                      backgroundColor: "green",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                    {props.preis} €
                  </span>
                </span>
              ) : null}
            </div>
            <div className="column is-narrow">
              {props.preis03 ? (
                <span
                  style={{
                    backgroundColor: "white",
                    padding: "5px",
                    color: "black",
                  }}
                >
                  0,3 L{" "}
                  <span
                    style={{
                      backgroundColor: "green",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                    {props.preis03} €
                  </span>
                </span>
              ) : null}
            </div>
            <div className="column is-narrow">
              {props.preis05 ? (
                <span
                  style={{
                    backgroundColor: "white",
                    padding: "5px",
                    color: "black",
                  }}
                >
                  0,5 L{" "}
                  <span
                    style={{
                      backgroundColor: "green",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                    {props.preis05} €
                  </span>
                </span>
              ) : null}
            </div>
            <div className="column is-narrow">
              {props.preisMa ? (
                <span
                  style={{
                    backgroundColor: "white",
                    padding: "5px",
                    color: "black",
                  }}
                >
                  1 L{" "}
                  <span
                    style={{
                      backgroundColor: "green",
                      padding: "5px",
                      color: "white",
                    }}
                  >
                    {props.preisMa} €
                  </span>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Drink;
