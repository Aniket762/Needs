import React from 'react';
import { TextInput, View , StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={25}  style={styles.icon} />}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f2f2f2',
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical:50
    },
    textInput: {
        fontSize: 18,
        color:'#0c0c0c'
    },
    icon: {
    
        marginRight:10
    }
})