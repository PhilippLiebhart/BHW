import React from "react";

const GetraenkekarteSection = (props) => {
  console.log("BIER PROPS", props);
  return (
    <React.Fragment>
      <div className="container has-background-success-dark has-text-white px-3 py-3">
        <p className="is-size-4">{props.sectionName}</p>
      </div>
      {props.sectionItems}
    </React.Fragment>
  );
};

export default GetraenkekarteSection;
