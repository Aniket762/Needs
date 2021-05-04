import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

const initialMessages = [
  {
    id: 1,
    title: "Aniket 3d",
    description: "Hi! are you selling the watch?",
    image: require("../assets/aniket.png"),
  },
  {
    id: 2,
    title: "Aniket Pal",
    description:
      "Can we re-negotiate?I think you are charging more.",
    image: require("../assets/aniket.jpeg"),
  },
  {
    id: 3,
    title: "Aniket 3d",
    description: "Hi! I really like the monster shoes",
    image: require("../assets/aniket.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Aniket Pal",
              description:
                "Can we re-negotiate?I think you are charging more.",
              image: require("../assets/aniket.jpeg"),
            },
            {
              id: 3,
              title: "Aniket",
              description: "Hi! I really like the monster shoes",
              image: require("../assets/aniket.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
