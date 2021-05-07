import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
	return (
		<ImageBackground
			blurRadius={1.2}
			style={styles.background}
			source={require("../assets/blackbg.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/needs.png")}
				/>
			<Text style={styles.tagline}>You need to sell they need to buy</Text>
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
		backgroundColor:'#000'
	},
	buttonsContainer: {
		width: "100%",
		padding: 20,
		marginBottom:70
	},
	highlight: {
	 color:'#000'	
	},
	highlight2: {
	 color:'#5AF822'	
	},
	logo: {
		marginTop:70,
		width: 270,
		height: 60,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	tagline: {
		fontSize: 20,
		marginTop:24,
		fontWeight: "bold",
		color: '#fff',
		alignItems: 'center',
		
	},
});

export default WelcomeScreen;
