import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

class App extends Component {
  

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </Router>
    );
  }
}

export default App;
