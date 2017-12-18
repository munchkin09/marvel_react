import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Action, Scene, Router } from 'react-native-router-flux';

import HeroesList from './sections/heroes/HeroesList';

/********* REDUX *********/
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './redux/reducers';

const reducer = combineReducers(reducers)
const store = createStore(reducer,applyMiddleware(thunk))
/****** FIN REDUX ******/


export default class App extends Component {

    componentWillMount() {
        /*
        Aquí vamos a configurar el WS que se conecte a la API de marvel
        */
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key='root'>
                        <Scene
                            key={'HeroesList'}
                            component={HeroesList}
                            hideNavBar
                        />
                        {/*<Scene
                            key={'HeroeDetail'}
                            componet={HeroeDetail}
                        />*/}
                    </Scene>
                </Router>
            </Provider>
        )
    }

}
