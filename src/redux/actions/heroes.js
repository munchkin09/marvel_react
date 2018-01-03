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

function updateHeroeDetail(value) {
    return {
        type: types.HEROE_UPDATE_DETAIL,
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
        dispatch(updateHeroeSelected({}))
        fetch(fetchUrl)
        .then( (response) => {
            const list = response
            dispatch(isFetchingHeroes(false))
            dispatch(updateHeroesList(list))
        })
        .catch( (error) => {
            dispatch(isFetchingHeroes(false))
            console.log("error actions ", error)
        })
    }
}

export function fetchHeroeDetails() {
    return (dispatch, getState) => {
        
        const state = getState()
        const fetchUrl = 'characters/' + state.heroes.item.id
        console.log('fetchHeroeDetails ', fetchUrl)
        dispatch(updateHeroeDetail({}))
        dispatch(isFetchingHeroes(true))   
        fetch(fetchUrl)
        .then( (response) => {
            const heroe = response.data[0]
            dispatch(isFetchingHeroes(false))
            dispatch(updateHeroeDetail(heroe))
        })
        .catch( (error) => {
            
            console.log("error actions ", error)
        })
    }
}