import Card from "../Card/Card";
import style from "./Cards.module.css"
import portal from "../assets/portal.png"

const Cards = ({characters, onClose, clear}) => {
   return (
      <div className={style.contenedor}>
         { 
            characters.length > 0 
               ?  (<div className={style.navClear}>
                     <button className={style.clear} onClick={() => clear()}>Clear All</button>
                  </div>)
               :  (<div className={style.waitConteiner}>
                     <div className={style.wait} style={{backgroundImage: `url(${portal})`}}></div>
                     <div>
                        <h3 className={style.load}>Waiting Character....</h3>
                     </div>
                  </div>)

         }
         <div className={style.cardsConteiner}>
            {characters.map(e => {
               return <Card
               key={e.id}
               id={e.id}
               name={e.name}
               image={e.image} alt={e.name}
               status={e.status}
               species={e.species}
               gender={e.gender}
               origin={e.origin.name}
               onClose={() => onClose(e.id)}
               /> 
            })}
         </div>
      </div>
   );
};

export default Cards;