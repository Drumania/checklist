import React from "react";

const Element = ({ name, img }) => {
  console.log("name: " + name);
  return (
    <div className="grid-element">
      <div
        className="elem-bg-image"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        &nbsp;
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default Element;
