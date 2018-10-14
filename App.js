import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home'
import Profile from './components/Profile'

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: Home,
  Profile: Profile,
})

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
