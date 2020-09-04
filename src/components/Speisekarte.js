import React, { useState, useEffect } from "react";

import { client } from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Speisekarte = (props) => {
  const [speisen, setSpeisen] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log("RESPONSE", response);
        setSpeisen(response.items);
      })
      .catch(console.error);
  }, []);
  console.log("SPEISEN STATE", speisen);
  return (
    <div>
      <div className="section mt-0">
        <div className="container">
          <div className="content">
            <h1 className="title">Speisekarte</h1>
            <h6 className="subtitle">Alle Preise in Euro</h6>
            <h6 className="subtitle is-6">
              Mitgebrachte Speisen können nicht verzehrt werden!
              Beilagenänderungen möglich.
            </h6>
            <span className="tag is-large mb-3 pb-5 pt-5">
              Unsere Tagesgerichte für € 7,80
            </span>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      Münchner Weißwürst vom Wallner (täglich frisch, solange
                      der Vorrat reicht)
                    </p>
                    <h6>Stück 2,50</h6>
                  </div>
                </div>
              </article>
            </div>

            <span className="tag is-large mb-3 pb-5 pt-5">
              Münchner Originale & Bayrische Klassiker
            </span>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src="https://bulma.io/images/placeholders/128x128.png"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      Münchner Weißwürst vom Wallner (täglich frisch, solange
                      der Vorrat reicht)
                    </p>
                    <h6>Stück 2,50</h6>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speisekarte;
