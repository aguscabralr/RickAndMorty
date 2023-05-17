import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = ({characters, onClose}) => {
   return (
      <div className={style.contenedor}>
         {characters.map(e => {
            return <Card
            key={e.id}
            id={e.id}
            name = {e.name}
            image = {`${e.image}`} alt={`${e.name}`}
            status = {e.status}
            species = {e.species}
            gender = {e.gender}
            origin = {e.origin.name}
            onClose = {() => onClose(e.id)}
            /> 
         })}
      </div>
   );
};

export default Cards;