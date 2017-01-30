import React from 'react';

import Home from './Home';
import One from './One';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router>
      <Scene key='root'>
       <Scene key='home' component={Home} title='Home'/>
       <Scene key='one' component={One} title='One'/>
      </Scene>
      </Router>
      );
  }
}

export default App;