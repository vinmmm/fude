/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';



export default class Home extends Component {

state = {
  moniker: '',
};

constructor() {
  super();
  this.state = {name: "Fude"}
}


  render() {
    setTimeout(() => {
      this.setState({name: "Find Some Food Now!"});
    }, 5000)
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      {this.state.name}
      </Text>
       <View style={styles.logo}>
        <Image source={require('../img/logo5.png')} style={{width: 125, height: 101, marginRight: 79}} />
       </View>
        <Text style={styles.welcome}>
          FUDE!
        </Text>

        <View>
        <Text style={styles.locator}>
          Find A Food Truck
        </Text>
        <TextInput 
        style={styles.nameInput}
        placeholder='What do you want to eat?'
        onChangeText={(text) => {
          this.setState({
            moniker: text,
          });
        }}
        value={this.state.moniker}
        />
        <TouchableOpacity
        onPress={() => {
          // Navigate to the second screen and pass it a name.
          Actions.one({
            moniker: this.state.moniker,
          });
        }}
        >
        <Text style={styles.buttonText}>
        Next
        </Text>
        </TouchableOpacity>
        </View>

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
  locator: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    color: 'white',
  },
  nameInput: {
    padding: 10,
    height: 40,
    width: 300,
    borderWidth: 2,
    backgroundColor: 'blue',
    borderColor: 'black',
    margin: 20,
    color: 'gold',
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  }
});

module.exports = Home;
