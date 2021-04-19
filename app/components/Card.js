import React from 'react'
import { View,StyleSheet, Image, Text } from 'react-native'

import colors from '../config/colors';

function Card({title,subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            
            <View style={styles.detailsContainer} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        backgroundColor: colors.light,
        marginBottom: 20,
        overflow:"hidden"
    },
    detailsContainer: {
       padding:20, 
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom:7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight:"300",
    }
});

export default Card
