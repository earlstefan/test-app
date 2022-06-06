import React from "react";

const ColorInput = ({ toChildColor, toParentColor }) => {
  console.log(toChildColor);
  const changeColor = (e) => {
    toParentColor(e.target.value);
  };

  return (
    <div>
      <input value={toChildColor} onChange={changeColor} />
    </div>
  );
};

export default ColorInput;
