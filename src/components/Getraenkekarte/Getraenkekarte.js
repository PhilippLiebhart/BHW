import React, { useState, useEffect } from "react";

import { client } from "../../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Drink from "./Getraenk/Getraenk";
import GetraenkekarteSection from "./GetraenkekarteSection";

const Getraenkekarte = (props) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log("[[ CONTENTFUL RESPONSE SPEISEKARTE.JS ]]", response);

        setDrinks(response.items);
      })
      .catch(console.error);
  }, []);

  const getSection = (name) => {
    const filterByName = name;
    const sectionItem = drinks
      .filter((type) => type.sys.contentType.sys.id === filterByName)
      .map((drink, index) => {
        console.log("SINGLER DRINK:", drink);
        const richText = drink.fields.beschreibung;
        const richedText = documentToReactComponents(richText);

        // check if img url is empty
        let imageUrl = "";

        ///
        console.log(imageUrl);
        return (
          <Drink
            key={drink.sys.id}
            name={drink.fields.getrnk}
            beschreibung={richedText}
            preis={drink.fields.preis}
            preis05={drink.fields.preis05}
            preis03={drink.fields.preis03}
            preisMa={drink.fields.preisMa}
            imgURL={imageUrl}
          />
        );
      });
    return sectionItem;
  };

  const bier = getSection("biere");
  const schnaps = getSection("schnaps");
  const warmeGetrnke = getSection("warmeGetrnke");
  const alkoholfreieGetrnke = getSection("alkoholfreieGetrnke");
  const offeneWeine = getSection("offeneWeine");
  const sekt = getSection("sekt");

  return (
    <div className="section">
      <h1 className="title is-2 ">Getr&auml;nkekarte</h1>

      <h6 className="subtitle">Alle Preise in Euro</h6>

      <GetraenkekarteSection
        sectionName="Unsere Biere von Hacker - Pschorr und Paulaner"
        sectionItems={bier}
      />
      <GetraenkekarteSection
        sectionName="Etwas Geistreiches für hinterher (im 2-cl-Glas)"
        sectionItems={schnaps}
      />
      <GetraenkekarteSection
        sectionName="Warme Getränke"
        sectionItems={warmeGetrnke}
      />
      <GetraenkekarteSection
        sectionName="Alkoholfreie Getränke"
        sectionItems={alkoholfreieGetrnke}
      />
      <GetraenkekarteSection
        sectionName="Offene Weine
        Unsere Frankenweine der Domäne
        Graf von Schönborn Schloss Hallburg"
        sectionItems={offeneWeine}
      />
      <GetraenkekarteSection sectionName="Sekt" sectionItems={sekt} />
    </div>
  );
};

export default Getraenkekarte;
