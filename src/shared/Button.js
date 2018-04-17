import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';

export class Button extends Component {
    getAddStyleSheet() {
        const { type } = this.props;
        if (type === 'success') return ({backgroundColor: '#25C7A3'});
        if (type === 'danger') return { backgroundColor: '#FF564E' };
        if (type ==='warning') return { backgroundColor:'#FFB827' };
        if (type === 'primary') return { backgroundColor: '#6AA3DA' };
        return { backgroundColor: '#222' };
    }
    render() {
        const { title, onPress } = this.props;
        addStyleSheet = this.getAddStyleSheet();
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.buttonContainer, addStyleSheet, this.props.style]} 
            >
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>            
        )
    }
};

const styles = StyleSheet.create ({
    buttonContainer: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
    }
});