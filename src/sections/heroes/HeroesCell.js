import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Platform, Text } from 'react-native'


export default class HeroesCell extends Component {

    static defaultProps = {
        onSelected: () => {},
        item: {}
    }

}