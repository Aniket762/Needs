import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

let pic = {
  uri: 'https://camo.githubusercontent.com/0a1774a709b82788e41539966e621fec4af23b5ced5e6fff3ef0059494e9ce2f/68747470733a2f2f696d6167652e6672656570696b2e636f6d2f667265652d70686f746f2f6f6e6c696e652d6d6f62696c652d73686f7070696e672d736d61727470686f6e652d77617463682d636c6f636b2d73686f652d73746169727761792d33642d72656e6465722d73686f7070696e672d736d61727470686f6e652d6170706c69636174696f6e2d33642d72656e646572696e675f37333930332d3535382e6a7067'
};

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0.8}
      style={styles.background}
      source={pic}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/webwiz-logo.png")} />
        <Text style={styles.tagline}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
