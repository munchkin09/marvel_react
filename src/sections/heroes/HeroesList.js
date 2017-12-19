import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as HeroesActions  from 'marvel_react/src/redux/actions/heroes'
//import HeroesCell from './HeroesCell';

import { connect } from 'react-redux';

class HeroesList extends Component {

    componentWillMount() {
        /*
        Aquí invocaremos la función de cargar heroes del WS
        */
        this.props.fetchHeroesList()
    }

    renderItem(item, index) {
        return(<View><Text>{item.name}</Text></View>)
    }

    render() {
        const list = this.props.list ? this.props.list.data : []
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={ ({item, index}) => this.renderItem(item, index) }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.heroes.list,
        selected: state.heroes.item,
        isFetching: state.heroes.isFetching
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchHeroesList: () => {
            dispatch(HeroesActions.fetchHeroesList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeroesList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        paddingBottom: 20,
        paddingTop: 60,
    }
})