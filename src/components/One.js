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
  Image
} from 'react-native';

import api from '../utilities/api';


export default class One extends Component {

constructor(props){
  super(props);
  this.state = {
    rovers: [],
    roverName:''
    
  }
}

componentWillMount(){
  api.getRovers().then((res) => {
    this.setState({
      rovers: res.rovers,
      roverName: res.rovers[0].name
      
    })
  });
}


  render() {
    
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      
      </Text>
       <View style={styles.logo}>
        <Image source={require('../img/logo5.png')} style={{width: 125, height: 101, marginRight: 79}} />
       </View>
        <Text style={styles.welcome}>
          So, your hungry for some {this.props.moniker}
        </Text>
        <Text style={styles.instructions}>
          Here are some trucks serving {this.props.moniker}
        </Text>
        <Text style={styles.instructions}>
          Sonoras{'\n'}
          Current Location: Carrier Park{'\n'}
          Rover Name: {this.state.roverName}
        </Text>
      </View>
    );
  }
}

One.defaultProps = {
  moniker: 'Pizza',
};

One.propTypes = {
  moniker: React.PropTypes.string,
};

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

module.exports = One;
