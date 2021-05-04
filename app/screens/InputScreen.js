import React, { useState } from 'react';
import { TextInput, View , StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

export default function InputScreen()
{
    const [firstName, setFirstName] = useState('');
    return (
        <View style={styles.screen}>

            <TextInput
                clearButtonMode="always"
                keyboardType="numeric"
                onChangeText = {text =>setFirstName(text)}
                style={styles.inputarea}
                placeholder="First Name" />

            <Text>{firstName }</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor:'#f2f2f2' 
    },
    inputarea: {
        borderBottomColor: '#ccc',
        borderBottomWidth:1
    }
})