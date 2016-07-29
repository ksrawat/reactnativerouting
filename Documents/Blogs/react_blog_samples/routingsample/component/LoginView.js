"use strict"


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';


import HomePage from './HomePage';

class LoginView extends Component{

	constructor(props){
		super(props);
		this.state = {
			username: "react",
			password: "native"
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					LogIn
				</Text>

				 <View>
                    <TextInput
                        placeholder="Username"
                        onChange={(event) => this.setState({username: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.username} />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        onChange={(event) => this.setState({password: event.nativeEvent.text})}
                        style={styles.formInput}
                        value={this.state.password} />
                    <TouchableHighlight onPress={(this.onSubmitPressed.bind(this))} style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                </View>
			</View>
		);
	}
	onSubmitPressed() {
        this.props.navigator.push({
            title: "Home Page",
            component: HomePage,
            passProps: {username: this.state.username, password: this.state.password},
        });
    }
};

var styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: "stretch"
    },
    title: {
        fontSize: 18,
        marginBottom: 10
    },
    formInput: {
        height: 36,
        padding: 10,
        marginRight: 5,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#555555",
        borderRadius: 8,
        color: "#555555"
    },
    button: {
        height: 36,
        flex: 1,
        backgroundColor: "#555555",
        borderColor: "#555555",
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
        alignSelf: "center"
    },
});

module.exports = LoginView;