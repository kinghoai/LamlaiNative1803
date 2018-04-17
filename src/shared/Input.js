import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export class Input extends Component {
    render() {
        const { placeholder, onChangeText, secureTextEntry } = this.props;
        return (
            <TextInput 
                    style={styles.textInput}
                    placeholder={placeholder}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    spellCheck={false}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
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
