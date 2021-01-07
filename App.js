import React from 'react';
import { StyleSheet, View } from 'react-native';
import insta from "./screens/Insta"
import facebook from "./screens/facebook"
import {createAppContainer } from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import { render } from 'react-dom';

export default function App() {
  render(); {
  return (
    <View style={styles.container}>
      <Appcontainer />
    </View>
  ) 
  }
}

const TabNavigator = createBottomTabNavigator({
   fb:{screen:facebook},
   insta:{screen:insta}
})
const Appcontainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
