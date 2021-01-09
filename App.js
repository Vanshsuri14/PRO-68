import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigator';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import fbScreen from './screens/fbScreen';
import inScreen from './screens/inScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

var TabNavigator = createBottomTabNavigator({
  fbScreen : fbScreen,
  inScreen : inScreen
})

var AppContanier = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
