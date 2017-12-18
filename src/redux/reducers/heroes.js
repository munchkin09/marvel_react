

const initialState = {
    isFetching: false,
    list: [],
    item: null
}

export default function reducer(state=initialState,action={}) {

    switch(action.type) {
        case 'HEROES_UPDATE_LIST':
            return {
                ...state,
                list: action.value
            };
        case 'HEROES_UPDATE_SELECTED':
            return {
                ...state,
                item: action.value
            }
        case 'HEROES_IS_FETCHING':
            return {
                ...state,
                isFecthing: action.value
            }
        default:
            return state;
    }
}