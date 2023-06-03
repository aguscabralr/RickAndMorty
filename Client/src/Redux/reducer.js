import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ANIMATE } from "./actions-types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    animation: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
            }
        case FILTER:
            const filterAll = state.allCharacters.filter(character => character.gender === action.payload);
            return {
                ...state,
                myFavorites: action.payload === 'allCharacters'
                ? [...state.allCharacters]
                : filterAll,
            }
        case ORDER:
            const allCharCopy = [...state.allCharacters];
            return {
                ...state,
                myFavorites: action.payload === 'A' 
                ? allCharCopy.sort((a,b) => a.id - b.id)
                : allCharCopy.sort((a,b) => b.id - a.id),
            }
        case ANIMATE:
            return {
                ...state,
                animation: action.payload,
            };
        default: return {...state}
    };
};
export default reducer;