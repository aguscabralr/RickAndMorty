import { LOAD_FAV, ADD_FAV, FILTER, ORDER, REMOVE_FAV, ANIMATE, } from "./actions-types";
import axios from "axios";

const endpoint = 'http://localhost:3001/rickandmorty';

export const loadFav = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${endpoint}/fav`);
            return dispatch({ type: LOAD_FAV, payload: data, });
        } catch (error) {
            alert(error.response.data);
        };
    };
};

export const addFav = (character) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endpoint}/fav`, character);
            return dispatch({ type: ADD_FAV, payload: data, });
        } catch (error) {
            alert(error.response.data);
        };
    };
};

export const removeFav = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${endpoint}/fav/${id}`);
            return dispatch({ type: REMOVE_FAV, payload: data, });
        } catch (error) {
            alert(error.response.data);
        };
    };
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender, };
};

export const orderCards = (orden) => {
    return { type: ORDER, payload: orden, };
};

export const animate = (on) => {
    return { type: ANIMATE, payload: on, };
};