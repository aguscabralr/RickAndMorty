import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, SHOW_ALL_FAV, ANIMATE, } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    animation: true,
};


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload, };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload, };
        case ORDER:
            return {
                ...state, myFavorites: payload === 'A'
                    ? [...state.allCharacters].sort((a, b) => a.id - b.id)
                    : [...state.allCharacters].sort((a, b) => b.id - a.id),
            };
        case FILTER:
            return { ...state, myFavorites: state.allCharacters.filter(character => character.gender === payload), };
        case SHOW_ALL_FAV:
            return { ...state, myFavorites: state.allCharacters, };
        case ANIMATE:
            return { ...state, animation: payload, };
        default: return { ...state };
    };
};

export default reducer;