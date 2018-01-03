import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native'

import { Colors } from 'marvel_react/src/commons'

import { connect } from 'react-redux';

import * as HeroesActions from 'marvel_react/src/redux/actions/heroes'

class HeroeView extends Component {

    componentWillMount() {
        this.props.fetchHeroe(this.props.item.id)
    }

    render() {
        const heroe = this.props.detail
        const nombre = heroe ? heroe.name : ''
        const descripcion = heroe ? heroe.description : ''
        const imagen = heroe && heroe.thumbnail ? { uri: heroe.thumbnail.path.replace('http','https') + '/landscape_xlarge.' + heroe.thumbnail.extension } : null
        return ( 
            <View style={styles.container}>
                <Image source={ imagen } style={ styles.img } resizeMode={ 'cover' }/>
                <Text style={ styles.descripcion }>{ descripcion }</Text>
                <FlatList />

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.heroes.item,
        detail: state.heroes.heroe_detail,
        isFetching: state.heroes.isFetching
    }

}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHeroe: (heroeId) => {
             dispatch(HeroesActions.fetchHeroeDetails(heroeId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroeView)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.background,
        paddingBottom: 20,
        paddingTop: 60,
    },

    img: {
        width:'100%',
        height:300,
    },

    descripcion: {
        color: 'white',
        fontSize:19
    }
})