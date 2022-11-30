import React, { useState } from "react";
import checkTilt from "../assets/logo.png";

const Element = ({ name, img }) => {
  const [check, setcheck] = useState(false);

  return (
    <div className="grid-element">
      <div
        className="elem-bg-image"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div
          className={check ? "elem-check check" : "elem-check "}
          onClick={() => setcheck((check) => !check)}
        >
          <img src={checkTilt} alt="check" />
        </div>
      </div>
      <h2 className={check && "green"}>{name}</h2>
    </div>
  );
};

export default Element;
