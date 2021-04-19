import React from 'react'
import { View ,StyleSheet, Image, Text} from 'react-native'
import colors from '../config/colors'


function ListItem({title,subTitle,image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={{marginVertical:7}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{ subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight:10
    },
    title: {
        color: colors.dark,
        fontSize: 17,
        marginVertical:3
    },
    subTitle: {
        color: colors.medium,

    }
})

export default ListItem
