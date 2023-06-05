import { ADD_FAV, FILTER, ORDER, SHOW_ALL_FAV, REMOVE_FAV, ANIMATE, } from "./actions-types";
import axios from "axios";

const endpoint = 'http://localhost:3001/rickandmorty/fav';

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            return dispatch({ type: ADD_FAV, payload: data, });
        } catch (error) {
            console.log(error);
        };
    };
};

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endpoint}/${id}`);
            return dispatch({ type: REMOVE_FAV, payload: data, });
        } catch (error) {
            console.log(error);
        };
    };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender, };
};

export const showAllFavs = (noFilter) => {
    return { type: SHOW_ALL_FAV, payload: noFilter, };
};

export const orderCards = (orden) => {
    return { type: ORDER, payload: orden, };
};

export const animate = (on) => {
    return { type: ANIMATE, payload: on, };
};