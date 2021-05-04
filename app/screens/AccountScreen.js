import React, { Component } from 'react'
import { Text, View , StyleSheet, SafeAreaView, FlatList } from 'react-native'
import Constants from 'expo-constants';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';

import colors from '../config/colors';
import ListIteamSeparator from '../components/ListIteamSeparator';

const menuItems = [
    { title: "My Listings", icon: { name: "format-list-bulleted", backgroundColor: colors.primary } },
    {title:"My Messages", icon:{ name:"email", backgroundColor:colors.secondary}}
]

export default class AccountScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.screen}>
                <View style={styles.container}>

                <ListItem
                    title="Aniket Pal"
                    subTitle="aniketindian8@gmail.com"
                    image={require('../assets/aniket.jpeg')}

                />
                </View>

                <View style={styles.container}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={menuItems => menuItems.title}
                        ItemSeparatorComponent={ListIteamSeparator}
                        renderItem={({ item }) =>
                            <ListItem
                                title={item.title}
                                IconComponent={
                                    <Icon name={item.icon.name}
                                        backgroundColor={item.icon.backgroundColor} />
                                }
                            />
                        }
                    />
                </View>

                <ListItem
                    title="Log Out"
                    IconComponent={
                        <Icon name="logout" backgroundColor="#ffe66d"/>
                    }
                />

            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor:'#f2f2f2'
    },
    container: {
        marginVertical:20
    }
});