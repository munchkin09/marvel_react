import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

//import HeroesCell from './HeroesCell';

//import { connect } from 'react-redux';

export default class HeroesList extends Component {

    componentWillMount() {
        /*
        Aquí invocaremos la función de cargar heroes del WS
        */
    }

    renderItem(item, index) {
        return(<View><Text>{item}</Text></View>)
    }

    render() {
        console.log('render ',this.props) 
        return (
            <View style={styles.container}>
                <FlatList
                    data={[1,2,3,4]}
                    renderItem={ ({item, index}) => this.renderItem(item, index) }
                    numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        paddingBottom: 20,
        paddingTop: 60,
    }
})