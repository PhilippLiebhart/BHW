import React, { useState, useEffect } from "react";

import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Speise from "./Speise/Speise";
import SpeisekarteSection from "./SpeisekarteSection";

const Speisekarte = (props) => {
  const [speisen, setSpeisen] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log("[[ CONTENTFUL RESPONSE SPEISEKARTE.JS ]]", response);

        setSpeisen(response.items);
      })
      .catch(console.error);
  }, []);

  const getSection = (name) => {
    const filterByName = name;
    const sectionItem = speisen
      .filter((type) => type.sys.contentType.sys.id === filterByName)
      .map((speise, index) => {
        const richText = speise.fields.beschreibung;
        const richedText = documentToReactComponents(richText);

        // check if img url is empty
        let imageUrl = speise.fields.foto;
        if (imageUrl !== undefined) {
          imageUrl = speise.fields.foto.fields.file.url;
        } else {
          imageUrl = "";
        }
        ///
        return (
          <Speise
            key={speise.sys.id}
            name={speise.fields.name}
            beschreibung={richedText}
            preis={speise.fields.preis}
            imgURL={imageUrl}
          />
        );
      });
    return sectionItem;
  };

  const wochenkarte = getSection("tagesgericht");
  const bayrisch = getSection("mnchnerOriginaleBayrischeKlassiker");
  const nuernberger = getSection("originalNrnbergerRostbratwrstchen");
  const fraenkisch = getSection("frnkischeSchmankerl");
  const brotzeiten = getSection("brotzeiten");
  const suppen = getSection("suppen");
  const salate = getSection("salate");
  const beilagen = getSection("beilagen");
  const dessert = getSection("dessert");

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
      <SpeisekarteSection
        sectionName="Münchner Originale & Bayrische Klassiker"
        sectionItems={bayrisch}
      />
      <SpeisekarteSection
        sectionName="Original Nürnberger Rostbratwürstchen"
        sectionItems={nuernberger}
      />
      <SpeisekarteSection
        sectionName="Fränkische Schmankerl"
        sectionItems={fraenkisch}
      />
      <SpeisekarteSection sectionName="Brotzeiten" sectionItems={brotzeiten} />
      <SpeisekarteSection sectionName="Suppen" sectionItems={suppen} />
      <SpeisekarteSection sectionName="Salate" sectionItems={salate} />
      <SpeisekarteSection sectionName="Beilagen" sectionItems={beilagen} />
      <SpeisekarteSection sectionName="Dessert" sectionItems={dessert} />
    </div>
  );
};

export default Speisekarte;
