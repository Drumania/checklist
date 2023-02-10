import React, { useEffect, useState } from "react";
import Element from "./Element";
import UseFetchData from "../hooks/useFetchData";

import { json } from "react-router-dom";

const List = () => {
  const { loading, result, error } = UseFetchData(
    "http://localhost:1337/api/listas/?populate=deep"
  );

  const [titulo, setTitulo] = useState();
  const [items, setItems] = useState();
  const [imgBkChecklist, setImgBkChecklist] = useState();

  // useEffect(() => {
  //   setTitulo(result.data[0].attributes.titulo_show);
  //   setItems(result.data[0].attributes.Items);
  //   setImgBkChecklist(result.data[0].attributes.thumb.data.attributes.url);
  // }, [result]);

  // setApiData(response.data),
  // setTitulo(apiData.data[0].attributes.titulo_show),
  // setItems(apiData.data[0].attributes.Items),
  // setImgBkChecklist(
  //   apiData.data[0].attributes.thumb.data.attributes.url
  // );

  return (
    <>
      <h1>{loading && "cargando..."}</h1>
      <h1>{error && "Error"}</h1>
      <h1>{result && "result"}</h1>
      {/* <div>{result.data[0].attributes.titulo_show}</div>

      <div
        className="container-fluid bk-listas"
        style={{
          backgroundImage: `linear-gradient(#16213ef2, #16213e), url("http://localhost:1337${imgBkChecklist}")`,
        }}
      ></div>

      <div className="grid-container grid-container--fill">
        {items.map((item) => (
          <Element
            key={item.id}
            name={item.item}
            img={item.thumb.data.attributes.url}
          />
        ))}
      </div> */}
    </>
  );
};

export default List;
