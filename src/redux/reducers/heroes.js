import * as types from '../types/heroes';

const initialState = {
    isFetching: false,
    list: [],
    item: null,
    heroe_detail: null
}

export default function reducer(state=initialState,action={}) {

    switch(action.type) {
        case types.HEROES_UPDATE_LIST:
            return {
                ...state,
                list: action.value
            };
        case types.HEROES_UPDATE_SELECTED:
            return {
                ...state,
                item: action.value
            }
        case types.HEROES_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case types.HEROE_UPDATE_DETAIL:
            return {
                ...state,
                heroe_detail: action.value
            }
        default:
            return state;
    }
}