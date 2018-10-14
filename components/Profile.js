import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class Profile extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: <TouchableOpacity onPress = {()=>navigation.navigate("Home")}
    style = {{backgroundColor:'blue', margin:10, padding:10}}>
    <Text style = {{color:'#fff'}}>Home</Text></TouchableOpacity>
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
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
