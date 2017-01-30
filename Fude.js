/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Title from './app/Title';


export default class fude extends Component {

constructor() {
  super();
  this.state = {name: "james"}
}


  render() {
    setTimeout(() => {
      this.setState({name: "St Jim"});
    }, 5000)
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      {this.state.name}
      </Text>
       <View style={styles.logo}>
        <Image source={require('./app/img/logo5.png')} style={{width: 125, height: 101, marginRight: 79}} />
       </View>
        <Text style={styles.welcome}>
          FUDE!
        </Text>
        <Text style={styles.instructions}>
          Food Truck
        </Text>
        <Text style={styles.instructions}>
          Find fude now.{'\n'}
          Do a Cmd+D or a shake for the dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
    marginTop: 23,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gold',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

module.exports = fude;
