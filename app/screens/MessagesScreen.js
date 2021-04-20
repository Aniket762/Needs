import React from 'react';
import { FlatList, SafeAreaView,StyleSheet, View} from 'react-native';
import Constants from 'expo-constants'

import ListItem from '../components/ListItem';
import ListIteamSeparator from '../components/ListIteamSeparator';

const messages = [
    {
        id: 1,
        title: 'title1',
        description: 'descp1',
        image:require('../assets/aniket.jpeg')
    },
    {
        id: 2,
        title: 'title2',
        description: 'descp2',
        image:require('../assets/aniket.jpeg')
    },
    {
        id: 3,
        title: 'title2',
        description: 'descp2',
        image:require('../assets/aniket.jpeg')
    },
    {
        id: 4,
        title: 'title2',
        description: 'descp2',
        image:require('../assets/aniket.jpeg')
    },
    {
        id: 5,
        title: 'title2',
        description: 'descp2',
        image:require('../assets/aniket.jpeg')
    },
    {
        id: 6,
        title: 'title2',
        description: 'descp2',
        image:require('../assets/aniket.jpeg')
    }
 ]
function MessagesScreen(props) {
    return (
        <SafeAreaView style={styles.screen}> 
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('Message Selected', item)}
                    renderRightActions={()=><View style={{ backgroundColor:'red',width:70}}></View>}
                    />}
                ItemSeparatorComponent={ListIteamSeparator}
        />
        </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default MessagesScreen;