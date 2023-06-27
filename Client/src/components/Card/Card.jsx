import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   const dispatch = useDispatch();
   const { myFavorites, animation } = useSelector(state => state); 
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({id, name, status, species, gender, origin, image, onClose}));
      };
   };
   
   useEffect(() => {
      myFavorites.forEach(fav => {
         if (fav.id === Number(id)) setIsFav(true);
      });
   }, [myFavorites, id]);

   return (
      <div className={animation ? style.presentacion : style.fijo } style={{backgroundImage: `url(${image})`}}>
         <button className={animation ? style.fav : style.favFijo} onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         <h3 className={animation ? style.nombre : style.nombreFijo}>{name}</h3>
         <button className={animation ? style.boton : style.botonFijo} onClick={() => {onClose(id)}}>X</button>
         <Link to={`/detail/${id}`} className={style.link}>
            <article className={style.propiedades}>
               <h4>Status: {status}</h4>
               <h4>Gender: {gender}</h4>
               <h4>Species: <br />{species}</h4>
               <h6>ID: {id}</h6>
            </article>
         </Link>
      </div>
   );
};

export default Card;