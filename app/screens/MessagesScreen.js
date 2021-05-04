import React , {useState} from 'react';
import { FlatList, SafeAreaView,StyleSheet, View} from 'react-native';
import Constants from 'expo-constants'

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListIteamSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
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
function MessagesScreen(props)
{
    const [messages, setmessgaes] = useState(initialMessages);
    const [refreshing,setRefreshing] =useState(false);

    const handleDelete = message =>
    {
     // delete the message from messages screen
     // call the server   
       const newMessages =  messages.filter(m => m.id !== message.id);
        setmessgaes(newMessages);
    }
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
                    renderRightActions={() =>
                    <ListItemDeleteAction  onPress={()=>handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() =>
                {
                    setmessgaes([
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
                        }
                    ])
                }}
        />
        </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex:1,
    }
})

export default MessagesScreen;