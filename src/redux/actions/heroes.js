import * as types from '../types/heroes';
import { Actions } from 'react-native-router-flux';
import { fetch } from 'marvel_react/src/webservices/webservice';

function updateHeroesList(value) {
    return {
        type: types.HEROES_UPDATE_LIST,
        value
    }
}

function isFetchingHeroes(value) {
    return {
        type: types.HEROES_IS_FETCHING,
        value
    }
}

export function updateHeroeSelected(value) {
    return {
        type: types.HEROES_UPDATE_SELECTED,
        value
    }
}

export function fetchHeroesList() {
    return (dispatch, getState) => {
        dispatch(isFetchingHeroes(true))
        const fetchUrl = 'characters'
        fetch(fetchUrl)
        .then( (response) => {
            const list = response
            console.log(list)
            dispatch(isFetchingHeroes(false))
            dispatch(updateHeroesList(list))
        })
        .catch( (error) => {
            dispatch(isFetchingHeroes(false))
            console.log("error actions ", error)
        })
    }
}