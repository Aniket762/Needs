import React from 'react'
import { View , StyleSheet} from 'react-native'
import colors from '../config/colors'

function ListIteamSeparator() {
    return (
        <View  style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.medium,
    },
});
export default ListIteamSeparator
