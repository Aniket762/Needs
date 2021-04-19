import React from 'react'
import { Image, View, StyleSheet, Text } from 'react-native'

import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/nike-shoes.jpg')} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title} >Nike monster shoe</Text>
                <Text style={styles.price}>₹ 1200</Text>
                <View style={styles.userContainer}>
                <ListItem
                    image={require('../assets/aniket.jpeg')}
                    title="Aniket Pal"
                    subTitle="7 Listings"
                />
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
    },
    price: {
        color:colors.secondary,
        fontWeight: '600',
        fontSize: 20,
        marginVertical:8
    },
    userContainer: {
        marginVertical:10,
    }
});

export default ListingDetailsScreen
