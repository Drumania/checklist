import React from "react";
import Element from "./Element";

import bariloche from "../assets/imgTask/bariloche.webp";
import cataratas from "../assets/imgTask/cataratas.webp";
import caminito from "../assets/imgTask/fb-caminito.jpg";
import sietecolores from "../assets/imgTask/sietecolores.png";
import usuahia from "../assets/imgTask/usuahia.jpeg";
import mate from "../assets/imgTask/mate.jpg";

const List = () => {
  let items = [
    { id: 1, name: "Visitar Bariloche", img: bariloche },
    { id: 2, name: "Foto en las Cataratas de Iguazu", img: cataratas },
    { id: 3, name: "Probar el mate", img: mate },
    { id: 4, name: "Bailar en Caminito, la boca", img: caminito },
    { id: 5, name: "Visitar Usuahia", img: usuahia },
    { id: 6, name: "Ver el Cerro de los siete colores", img: sietecolores },
    { id: 7, name: "Apple" },
    { id: 8, name: "Banana" },
    { id: 9, name: "Orange" },
    { id: 10, name: "Apple" },
    { id: 11, name: "Banana" },
    { id: 12, name: "Orange" },
    { id: 13, name: "Apple" },
    { id: 14, name: "Banana" },
    { id: 15, name: "Orange" },
    { id: 16, name: "Apple" },
    { id: 17, name: "Banana" },
    { id: 18, name: "Orange" },
    { id: 19, name: "Apple" },
    { id: 20, name: "Banana" },
    { id: 21, name: "Orange" },
    { id: 22, name: "Apple" },
    { id: 23, name: "Banana" },
    { id: 24, name: "Orange" },
    { id: 25, name: "Apple" },
    { id: 26, name: "Banana" },
    { id: 27, name: "Orange" },
    { id: 28, name: "Apple" },
    { id: 29, name: "Banana" },
    { id: 30, name: "Orange" },
    { id: 31, name: "Apple" },
    { id: 32, name: "Banana" },
    { id: 33, name: "Orange" },
  ];

  return (
    <div
      className="container-fluid"
      // style={{
      //   backgroundImage: `url("${argentina}")`,
      // }}
    >
      <div className="container">
        <h1>
          100 Cosas que hacer en: <span>Argentina</span>
        </h1>

        <div className="grid-container grid-container--fill">
          {items.map((item) => (
            <Element key={item.id} name={item.name} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
