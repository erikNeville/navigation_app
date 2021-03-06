import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: <Button title = "Home" />
  });
    
    
  

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
        title="Go To Profile"
        onPress={
          () => this.props.navigation.navigate('Profile')
        } 
        />
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
