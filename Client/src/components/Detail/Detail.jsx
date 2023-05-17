import style from "./Detail.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.ventana}>
      <div className={style.contenedor}>
        <div className={style.info}>
          <article className={style.text}>
            <h1>{character.name && character.name}</h1>
            <p>STATUS | {character.status && character.status}</p>
            <p>GENDER | {character.gender && character.gender}</p>
            <p>SPECIE | {character.species && character.species}</p>
            <p>ORIGIN | {character.origin?.name && character.origin?.name}</p>
          </article>
        </div>
        <div className={style.foto}>
          <img src={character.image && character.image}/>
        </div>
      </div>
    </div>
  );
};

export default Detail;
