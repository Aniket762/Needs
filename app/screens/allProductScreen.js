import React from 'react'
import { Text, View , FlatList ,StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import Card from '../components/Card';

const listing = [
    {
        id: 1,
        title:"Nike monster black",
        subTitle:"₹ 1200",
        image:require('../assets/nike-shoes.jpg')
    },
    {   id:2,
        title:"Nike monster black",
        subTitle:"₹ 1200",
        image:require('../assets/nike-shoes.jpg')
    },
    {   id:3,
        title:"Nike monster black",
        subTitle:"₹ 1200",
        image:require('../assets/nike-shoes.jpg')
    }
] 


function AllProductScreen() {
    return (
        <SafeAreaView  style={styles.screen}>
            <FlatList
             data={listing}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={item.subTitle}
                        image = {item.image}
                />
                }
            />
        </SafeAreaView>
    )
}

export default AllProductScreen


const styles = StyleSheet.create({
    screen: {
        padding: 20,
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor:'#f2f2f2'
        
    }
})