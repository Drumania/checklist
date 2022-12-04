import React, { useState } from "react";
import ThumbList from "./ThumbList";

const UserLists = () => {
  let listaUsuario = [
    {
      id: 1,
      tipo: 100,
      subtitulo: "100 Cosas que hacer en:",
      titulo: "Argentina",
      img: "argentina.png",
      fav: true,
    },
    {
      id: 2,
      tipo: 100,
      subtitulo: "100 Cosas para hacer:",
      titulo: "Soltero",
      img: "soltero.jpg",
      fav: false,
    },
    {
      id: 3,
      tipo: 100,
      subtitulo: "100 Juegos para:",
      titulo: "jugar en PC",
      img: "juegospc.jpg",
      fav: false,
    },
    {
      id: 5,
      tipo: 100,
      subtitulo: "100 Cosas que hacer:",
      titulo: "New World",
      img: "nwworld.jpg",
      fav: false,
    },
    {
      id: 4,
      tipo: 10,
      subtitulo: "10 Cosas que hacer en:",
      titulo: "Colombia",
      img: "colombie.jpg",
      fav: false,
    },
    {
      id: 5,
      tipo: 10,
      subtitulo: "10 Cosas que hacer en:",
      titulo: "Qatar",
      img: "qatar.webp",
      fav: false,
    },
  ];

  const [show, setShow] = useState(false);

  return (
    <div className="user-panel">
      <div className="show-fav-list" onClick={() => setShow((show) => !show)}>
        <div
          className="user-list-img"
          style={{
            backgroundImage: `url("../src/assets/imgList/${listaUsuario[0].img}")`,
          }}
        >
          &nbsp;
        </div>
        <div>
          {listaUsuario[0].subtitulo}
          <br />
          <strong>{listaUsuario[0].titulo}</strong>
        </div>
      </div>

      <ul className={show && "show-list"}>
        {listaUsuario.map((item) => (
          <ThumbList
            key={item.id}
            tipo={item.tipo}
            subtitulo={item.subtitulo}
            titulo={item.titulo}
            fav={item.fav}
            img={item.img}
          />
        ))}
        <li>
          <a href="/myList" className="show-all-lists">
            Ver Todas
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserLists;
