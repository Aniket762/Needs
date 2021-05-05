import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
      id: 1,
      title:"Nike monster black",
      subTitle:"₹ 1200",
      image:require('../assets/nike-shoes.jpg')
  },
  {   id:2,
      title:"Nike monster black",
      subTitle:"₹ 1200",
      image:require('../assets/nike-shoes.jpg')
  },
  {   id:3,
      title:"Nike monster black",
      subTitle:"₹ 1200",
      image:require('../assets/nike-shoes.jpg')
  }
] 

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        showsVerticalScrollIndicator={false}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
