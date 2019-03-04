import React, { Component } from 'react';
import { AppRegistory, Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShoingText: true };

        setInterval(() => (
            this.setState(previousState => (
                { isShoingText: !previousState.isShoingText }
            ))
        ), 1000);
    }

    render() {
        if (!this.state.isShoingText) {
            return null;
        }

        return(
            <Text>{this.props.text}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return(
            <View>
                <Blink text="AAA" />
                <Blink text="BBBB" />
                <Blink text="CCC" />
                <Blink text="DDD" />
            </View>
        );
    }
}