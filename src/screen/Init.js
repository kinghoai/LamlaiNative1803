import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';

export class Init extends Component {
    constructor(props){
        super(props);
        this.state={
            txtEmail: '',
            txtPassword: '',
        };
    }
    render() {
        const { txtEmail, txtPassword, secureTextEntry } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Init Component </Text>

                <Input
                    placeholder="Email"
                    onChangeText={text=>this.setState({ txtEmail: text })}
                    style={{ backgroundColor: 'yellow' }}
                />

                <Input 
                    placeholder="Password"
                    onChangeText={text=>this.setState({ txtPassword: text })}
                    secureTextEntry
                />
                <Button 
                    title="Login"
                    type="success"
                    style={{ width: 200 }}
                    onPress={()=>alert('123')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'lightblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        margin: 15,
    },
});