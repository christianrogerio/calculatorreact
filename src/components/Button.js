import React from 'react'
import {StyleSheet,Text, Dimensions,TouchableHighlight} from 'react-native'

export default props => {
    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={style.button}>{props.label}</Text>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    button:{
        fontSize: 30,
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 5,
        padding: 15,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    }
});