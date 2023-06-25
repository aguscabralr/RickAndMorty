import { LOAD_FAV, ADD_FAV, REMOVE_FAV, ORDER, FILTER, ANIMATE, } from "./actions-types";

const initialState = {
    myFavorites: [],
    filterFavorites: [],
    animation: true,
};


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_FAV:
            return { ...state, myFavorites: payload, filterFavorites: payload };
        case ADD_FAV:
            return { ...state, myFavorites: payload, filterFavorites: payload, };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload, filterFavorites: payload, };
        case ORDER:
            if (payload === 'O') return { ...state, filterFavorites: [...state.myFavorites] }; 
            return {
                ...state, filterFavorites: payload === 'A'
                    ? [...state.myFavorites].sort((a, b) => a.id - b.id)
                    : [...state.myFavorites].sort((a, b) => b.id - a.id),
            };
        case FILTER:
            const filterAll = state.myFavorites.filter(character => character.gender === payload);
            return {
                ...state, filterFavorites: payload === 'all'
                    ? [...state.myFavorites]
                    : filterAll,
            };
        case ANIMATE:
            return { ...state, animation: payload, };
        default: return { ...state };
    };
};

export default reducer;