import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Platform, Text } from 'react-native'


export default class HeroesCell extends Component {

    static defaultProps = {
        onSelected: () => {},
        item: {}
    }

    render() {
        const { item,onSelected } = this.props
        const imageUri = item.thumbnail ? { uri: item.thumbnail.path.replace('http','https') + '/landscape_xlarge.' + item.thumbnail.extension } : null
        return (
            <TouchableOpacity onPress={ () => onSelected(item)} style={styles.container}>
               
                <Image 
                    source={imageUri} 
                    style={styles.image}  
                    resizeMode={'cover'} 
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.name}</Text>
                </View> 
            </TouchableOpacity>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height:200,
        marginBottom:10
    },
    image: {
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0
    },
    textContainer: {
        flexDirection:'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(95,95,95,0.3)'
    },
    text: {
        color:'red',
        fontWeight: 'bold',
    }
});