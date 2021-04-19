import React from 'react'
import { Image, Text , StyleSheet,View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';



function ViewImageScreen(props)
{
    let pic = {
        uri: 'https://camo.githubusercontent.com/0a1774a709b82788e41539966e621fec4af23b5ced5e6fff3ef0059494e9ce2f/68747470733a2f2f696d6167652e6672656570696b2e636f6d2f667265652d70686f746f2f6f6e6c696e652d6d6f62696c652d73686f7070696e672d736d61727470686f6e652d77617463682d636c6f636b2d73686f652d73746169727761792d33642d72656e6465722d73686f7070696e672d736d61727470686f6e652d6170706c69636174696f6e2d33642d72656e646572696e675f37333930332d3535382e6a7067'
    };
    return (
        <View style={styles.container}> 
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color={colors.light} size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color={colors.light} size={35} />
            </View>
        <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../assets/nike-shoes.jpg')}
        />
        </View>
       
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left:30
    },
    container: {
        backgroundColor: colors.dark,
        flex:1,   
    },
    image: {
        width: '100%',
        height: '100%',
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right:30
    },

});

export default ViewImageScreen
