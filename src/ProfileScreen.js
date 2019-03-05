import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: "Profile"
    };
    render() {
        return (
            <Text>{this.props.name}</Text>
        );
    }
}