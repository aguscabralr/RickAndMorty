import style from './Favorites.module.css'
import Card from '../Card/Card';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { animate, filterCards, loadFav, orderCards } from '../../Redux/actions';

const Favorites = () => {
    const dispatch = useDispatch();

    const { filterFavorites } = useSelector(state => state);
    
    useEffect(() => {
        dispatch(loadFav());
        dispatch(animate(false));
        return () => dispatch(animate(true));
    }, []);

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
                    <option value="O">Select Order</option>
                    <option value="A">Asecendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter} className={style.select}>
                    <option value="all">All Characters</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={style.cardsConteiner}>
            {filterFavorites.length
                ?   filterFavorites.map(fav => {
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
                : <div className={style.notFound}>No hay ningún personaje de ese género</div>
            }
            </div>
        </div>
    );
};

export default Favorites;