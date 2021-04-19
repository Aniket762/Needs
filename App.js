import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ViewImageScreen from './app/screens/viewImageScreen';
import WelcomeScreen from './app/screens/welcomeScreen';
import AllProductScreen from './app/screens/allProductScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App()
{
  return (
    <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
