import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import * as HeroesActions  from 'marvel_react/src/redux/actions/heroes'
import HeroesCell from './HeroesCell';

import { connect } from 'react-redux';
import { Colors } from '../../commons/';

class HeroesList extends Component {

    componentWillMount() {
        this.props.fetchHeroesList()
    }

    renderItem(item, index) {
        return(<HeroesCell
            item={item}
            onSelected={ (heroe) => {
                this.props.updateSelected(heroe)
                
            }}
        ></HeroesCell>)
    }

    renderFooter() {
        return <ActivityIndicator
            animating={this.props.isFetching}
            size='large'
            color='#FABADA'
            style={{marginVertical: 20}}
        />
    }

    render() {
        const list = this.props.list ? this.props.list.data : []
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={ ({item, index}) => this.renderItem(item, index) }
                    keyExtractor={ (item,index) => item.id }
                    extraData={this.props}
                    ListFooterComponent={ () => this.renderFooter() }
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
        },
        updateSelected: (heroe) => {
            dispatch(HeroesActions.updateHeroeSelected(heroe))
            Actions.HeroeView({title: heroe.name })
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeroesList)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingBottom: 20,
        paddingTop: 10,
    }
})