import React, { useState, useEffect } from "react";

import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Speise from "./Speise/Speise";

const Speisekarte = (props) => {
  const [speisen, setSpeisen] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setSpeisen(response.items);
      })
      .catch(console.error);
  }, []);

  const wochenkarte = speisen
    .filter((type) => type.sys.contentType.sys.id === "tagesgericht")
    .map((speise, index) => {
      const richText = speise.fields.beschreibung;
      const richedText = documentToReactComponents(richText);
      return (
        <Speise
          key={speise.sys.id}
          name={speise.fields.name}
          beschreibung={richedText}
          preis={speise.fields.preis}
          imgURL={speise.fields.foto.fields.file.url}
        />
      );
    });

  const speisekarte = speisen
    .filter((type) => type.sys.contentType.sys.id === "speisen")
    .map((speise, index) => {
      const richText = speise.fields.beschreibung;
      const richedText = documentToReactComponents(richText);
      return (
        <Speise
          key={speise.sys.id}
          name={speise.fields.name}
          beschreibung={richedText}
          preis={speise.fields.preis}
          imgURL={speise.fields.foto.fields.file.url}
        />
      );
    });

  return (
    <div className="section">
      <h1 className="title is-2 ">Speisekarte</h1>
      <p className="subtitle is-6 pb-0 mb-0">
        Mitgebrachte Speisen können nicht verzehrt werden!
      </p>{" "}
      <p className="subtitle is-6"> Beilagenänderungen möglich.</p>
      <h6 className="subtitle">Alle Preise in Euro</h6>
      <div className="container has-background-success-dark has-text-white px-3 py-3">
        <p className="is-size-4">Unsere Tagesgerichte für € 7,80</p>
      </div>
      {wochenkarte}
      <div className="container has-background-success-dark has-text-white px-3 py-3">
        <p className="is-size-4">Münchner Originale & Bayrische Klassiker</p>
      </div>
      {speisekarte}
      <div className="container has-background-success-dark has-text-white px-3 py-3">
        <p className="is-size-4">Original Nürnberger Rostbratwürstchen</p>
      </div>
      {speisekarte}
    </div>
  );
};

export default Speisekarte;
