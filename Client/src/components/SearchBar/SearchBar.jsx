import style from "./SearchBar.module.css"
import { useState } from "react";

function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.contenedor}>
         <button className={style.random} onClick={() => onSearch(Math.floor(Math.random() * 826))}>Random</button>
         <button className={style.agregar} onClick={() => {onSearch(id); setId('')}}>Push</button>
         <input className={style.barra} type='number' min={1} max={826} onChange={handleChange} value={id} placeholder='Insert ID'/>
      </div>
   );
};

export default SearchBar;