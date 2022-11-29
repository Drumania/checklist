import { useState } from "react";
import logo from "./assets/logo.png";
import User from "./components/User";
import Element from "./components/Element";

import bariloche from "./assets/imgTask/bariloche.webp";
import cataratas from "./assets/imgTask/cataratas.webp";
import caminito from "./assets/imgTask/fb-caminito.jpg";
import sietecolores from "./assets/imgTask/sietecolores.png";
import usuahia from "./assets/imgTask/usuahia.jpeg";
import mate from "./assets/imgTask/mate.jpg";

function App() {
  let items = [
    { name: "Visitar Bariloche", id: 4, img: bariloche },
    { name: "Foto en las Cataratas de Iguazu", id: 1, img: cataratas },
    { name: "Probar el mate", id: 3, img: mate },
    { name: "Bailar en Caminito, la boca", id: 2, img: caminito },
    { name: "Visitar Usuahia", id: 3, img: usuahia },
    { name: "Ver el Cerro de los siete colores", id: 5, img: sietecolores },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
    { name: "Apple", id: 1 },
    { name: "Banana", id: 2 },
    { name: "Orange", id: 3 },
  ];

  console.log(items);
  return (
    <div className="container">
      <header>
        <div className="wrap-logo">
          <img className="logo" src={logo} alt="checklist" />
          <span>
            <strong>Check</strong>List
          </span>
        </div>
        <User />
      </header>

      <h1>
        100 Cosas que hacer: <span>Argentina</span>
      </h1>

      <div className="grid-container grid-container--fill">
        {items.map((item) => (
          <Element key={item.id} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
}

export default App;
