import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';

export default class AccountScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                
                <ListItem
                    ImageComponent={ <Icon  
                    name="email"
                    size={50}
                    backgroundColor="red"
                    iconCOlor="white"
                     />}
                    title="My title"
                    subTitle="My subTitle" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
});