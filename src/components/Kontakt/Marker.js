import PropTypes from "prop-types";
import React from "react";
import marker from "../../images/BHW_Logo_big.png";

const Marker = (props) => {
  const greatPlaceStyle = {
    position: "absolute",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={greatPlaceStyle}>
      <img style={{ width: props.markerWidth }} src={marker} alt="Marker" />
      <div
        style={{
          minWidth: "60px",
          textAlign: "center",
          padding: "2px",
          fontSize: "9px",
          backgroundColor: "darkgreen",
          color: "white",
        }}
      >
        {props.locName}
      </div>
    </div>
  );
};

Marker.defaultProps = {
  marker: "",
  locName: "",
  markerWidth: "50px",
};

Marker.propTypes = {
  marker: PropTypes.string,
  locName: PropTypes.string,
  markerWidth: PropTypes.string,
};

export default Marker;
