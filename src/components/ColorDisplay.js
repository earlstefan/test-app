import React from "react";

const ColorDisplay = ({ toChildColor }) => {
  return (
    <div className="colorContainer">
      <div className="colorBox" style={{ backgroundColor: toChildColor }}></div>
    </div>
  );
};

export default ColorDisplay;
