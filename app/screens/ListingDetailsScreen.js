import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Image } from "react-native-expo-image-cache";

import ListItem from "../components/lists/ListItem";

import ContactSellerForm from "../components/ContactSellerForm";
import Text from "../components/Text";

import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
	const listing = route.params;

	return (
		<KeyboardAvoidingView>
		<Image
				style={styles.image}
				preview={{ uri: listing.images[0].thumbnailUrl }}
				tint="light"
				uri={listing.images[0].url}
			/>
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{listing.title}</Text>
				<Text style={styles.price}>₹{listing.price}</Text>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/main_user.jpg")}
						title="Aniket Pal"
						subTitle="7 Listings"
					/>
				</View>
				<ContactSellerForm listing={listing} />
			</View>
		</KeyboardAvoidingView>
			
	
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 220,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
