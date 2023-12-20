import React from "react";

const ColorCard = (props) => {
  return (
    <div className="w-32 shadow-md">
      <div
        className={`w-full h-36`}
        style={{ backgroundColor: props.hex }}
      ></div>
      <p>{props.hex}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default ColorCard;
