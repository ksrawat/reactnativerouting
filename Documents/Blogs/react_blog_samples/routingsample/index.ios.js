"use strict";
 
import React, { Component } from 'react';
 
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
} from 'react-native';
 

import LoginView from './component/LoginView';
 
class routingsample extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigationContainer}
                
                //Defining routes
                initialRoute={{
                  title: "Login",
                  backButtonTitle: 'Back',
                  component: LoginView,
                }} 
            />
        );
    }
};
 
var styles = StyleSheet.create({
    navigationContainer: {
        flex: 1
    }
});
 
AppRegistry.registerComponent("routingsample", () => routingsample);