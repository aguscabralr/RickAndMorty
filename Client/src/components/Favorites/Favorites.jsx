import style from "./Favorites.module.css"
import Card from "../Card/Card";
import { connect } from "react-redux";
import { filterCards, orderCards } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };

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
            {
                myFavorites.map(fav => {
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
                })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    }
};

export default connect(mapStateToProps, null)(Favorites);