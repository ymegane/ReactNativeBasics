import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}} >
                <Text>Hellp {this.props.name}!</Text>
            </View>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return(
            <View style={{alignItems: 'center'}} >
                <Greeting name="Yujin" />
                <Greeting name="Jenia" />
                <Greeting name="Valeera" />
            </View>
        );
    }
}