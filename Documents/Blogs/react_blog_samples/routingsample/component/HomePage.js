"use strict";
 
import React, { Component } from 'react';
 
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
 
class HomePage extends Component {
 
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Welcome {this.props.username}!
                </Text>
                <Text style={styles.subheading}>
                    Your password is {this.props.password}
                </Text>
            </View>
        );
    }
 
};
 
var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "center"
    },
    heading: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: "center",
        color: "#656565"
    },
    subheading: {
        color: "#cccccc"
    }
});
 
module.exports = HomePage;