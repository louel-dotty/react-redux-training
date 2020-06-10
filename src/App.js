import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import MainContainer from './containers/MainContainer'

import { addTask, removeTask, toggleTask, filterTask } from './actions/action'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(addTask()),
  removeTask: () => dispatch(removeTask()),
  toggleTask: () => dispatch(toggleTask()),
  filterTask: () => dispatch(filterTask())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  addTask = (event) => {
    this.props.addTask();
  }
  removeTask = (event) => {
    this.props.removeTask();
  }
  toggleTask = (event) => {
    this.props.toggleTask();
  }
  filterTask = (event) => {
    this.props.filterTask();
  }

  render() {
    return (
      <MainContainer 
        addTask={this.addTask}
        removeTask={this.removeTask}
        toggleTask={this.toggleTask}
        filterTask={this.filterTask}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
