import React, { useState } from "react";

const ThumbList = ({ tipo, subtitulo, titulo, fav, img }) => {
  const [favorite, setFavorite] = useState(fav);

  return (
    <li className="user-list">
      <div
        className="user-list-img"
        style={{
          backgroundImage: `url("../src/assets/imgList/${img}")`,
        }}
      >
        &nbsp;
      </div>
      <div>
        {subtitulo}
        <br />
        <strong>{titulo}</strong>
      </div>

      {/* <div className="user-list-menu">
        <button
          className={
            favorite ? "user-list-favorite favorite" : "user-list-favorite"
          }
          title="Favorite"
          onClick={() => setFavorite((favorite) => !favorite)}
        >
          &nbsp;
        </button>
        <button className="user-list-delete" title="Delete">
          &#215;
        </button>
      </div> */}
    </li>
  );
};

export default ThumbList;
