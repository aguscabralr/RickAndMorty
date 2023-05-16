import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ANIMATE } from "./actions-types"

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character,
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    };
};

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden,
    };
};

export const animate = (on) => {
    return {
        type: ANIMATE,
        payload: on,
    };
};