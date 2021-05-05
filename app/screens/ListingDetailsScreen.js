import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={require("../assets/nike-shoes.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Nike monster black</Text>
        <Text style={styles.price}>₹1200</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/aniket.png")}
            title="Aniket Pal"
            subTitle="7 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
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
