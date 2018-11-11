import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './styles/style.scss';
// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const route = (
  <Router>
    <Route path="/" 
    render={() => 
      <Main>
        <Route path="/" exact component={PhotoGrid}/>
        <Route path="/view/:postID" component={Single}/>
      </Main>}
    />
  </Router>
)


ReactDOM.render(route, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
