import React, { Component } from 'react';

import './App.css';
import MainContainer from './containers/MainContainer'


/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */

  render() {
    return (
      <MainContainer />
    );
  }
}

export default App;
