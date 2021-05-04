import React from 'react'
import { View ,StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'


function ListItem({title,subTitle,IconComponent,image,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}>
                <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
            </View>
            </View>
            </TouchableHighlight>
        </Swipeable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor:colors.light
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center'
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
