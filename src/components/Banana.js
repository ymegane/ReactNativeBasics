import React, { Component } from 'react';
import { AppRegistory, Image } from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{justifyContent: 193, height: 110}} />
        );
    }
}