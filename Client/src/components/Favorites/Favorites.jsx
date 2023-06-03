import style from "./Favorites.module.css"
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };

    useEffect(() => {
        console.log(myFavorites);
    }, []);

    return (
        <div>
            <div className={style.navSelect}>
                <select onChange={handleOrder} className={style.select}>
                    <option value="A">Asecendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter} className={style.select}>
                    <option value="allCharacters">All Characters</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={style.cardsConteiner}>
            {myFavorites.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        status={fav.status}
                        gender={fav.gender}
                        image={fav.image}
                        origin={fav.origin}
                        onClose={fav.onClose}
                    />
                )
            })}
            </div>
        </div>
    );
};

export default Favorites;