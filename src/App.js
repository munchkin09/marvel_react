import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Action, Scene, Router, Actions } from 'react-native-router-flux';

import HeroesList from './sections/heroes/HeroesList';
import HeroeView from './sections/heroes/HeroeView';
import { Colors } from './commons'

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
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key='root'>
                        <Scene
                            key={'HeroesList'}
                            component={HeroesList}
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={'white'}
                            title={'Marvel App'}
                        />
                        <Scene
                            key={'HeroeView'}
                            component={HeroeView}
                            navigationBarStyle={styles.navBar}
                            navBarButtonColor={'white'}
                        />
                    </Scene>
                </Router>
            </Provider>
        )
    }

}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: Colors.navBar,
    },
  
    addButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
  
    addButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });