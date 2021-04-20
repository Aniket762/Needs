import React from 'react'
import { View ,StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'


function ListItem({title,subTitle,image,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={{marginVertical:7}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{ subTitle}</Text>
            </View>
            </View>
            </TouchableHighlight>
        </Swipeable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding:10
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
