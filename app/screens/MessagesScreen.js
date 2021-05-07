import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
	ListItem,
	ListItemDeleteAction,
	ListItemSeparator,
} from "../components/lists";

const initialMessages = [
	{
		id: 1,
		title: "Aniket Pal",
		description: "Yes, I am selling the iPad mini",
		image: require("../assets/user1.jpg"),
	},
	{
		id: 2,
		title: "Amira",
		description:
			"I will buy the cycle , but who will deliver?",
		image: require("../assets/user2.jpg"),
	},
	{
		id: 3,
		title: "Sumana Basu",
		description: "Hello, are you still selling the fitbit 404?",
		image: require("../assets/user3.jpg"),
	},
	{
		id: 4,
		title: "Shivam Dubey",
		description:
			"Let me know if you are still interested?",
		image: require("../assets/user4.jpg"),
	},
];

function MessagesScreen(props) {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		// Deletes the message from messages
		setMessages(messages.filter((m) => m.id !== message.id));
	};

	return (
		<Screen style={styles.container}>
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
							<ListItemDeleteAction
								onPress={() => handleDelete(item)}
							/>
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "Paul Borg",
							description:
								"I'm interested in this item. When will you be able to deliver it?",
							image: require("../assets/user2.jpg"),
						},
						{
							id: 3,
							title: "Jessica Fenech",
							description:
								"Hello, are you still selling the Canon 400D Camera?",
							image: require("../assets/user3.jpg"),
						},
						{
							id: 4,
							title: "Ryan Scibberas",
							description:
								"When can I come pick up the couch? Pickup is not an issue.",
							image: require("../assets/user4.jpg"),
						},
					]);
				}}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop:-10,
		backgroundColor: '#000'
	}

});

export default MessagesScreen;
