import React from "react";
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
      id: 4,
      tipo: 10,
      subtitulo: "10 Cosas que hacer en:",
      titulo: "Colombia",
      img: "colombie.jpg",
      fav: false,
    },
  ];

  return (
    <div className="user-panel">
      <h3>Mis listas:</h3>
      <ul>
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
      </ul>
      <a href="#!">Preferencias</a>
      <a href="#!" className="user-panel-logoff">
        Salir
      </a>
      <button className="user-panel-close">&#215;</button>
    </div>
  );
};

export default UserLists;
