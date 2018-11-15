import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {increment, decrement} from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.count}</p>
        <button onClick={() => this.props.dispatch(increment())}>+1</button>
        <button onClick={() => this.props.dispatch(decrement())}>-1</button>
      </div>
    );
  }
}

function mapStateToProp (store) {
  return {count : store.count}
}

export default connect(mapStateToProp)(App);
