import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export class Input extends Component {
    render() {
        return (
            <TextInput 
                    {...this.props}
                    style={[styles.textInput, this.props.style]}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    spellCheck={false}
                />
        )
    }
}

const styles = StyleSheet.create ({
    textInput: {
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#FFF',
        fontSize: 17,
        margin: 5,
    },
});
