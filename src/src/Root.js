import React, { Component } from 'react';
import './App.css';
import App from'./App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Signin from './Views/Signin'
import Signup from './Views/Signup'
import Home from './Views/Home'
import firebase from 'firebase'

const requireAuth = (nextState, replace, done) => {
    console.log('hello from Root')
    firebase.auth().onAuthStateChanged((user) => {
        if (user === null) {
          replace({
            pathname: 'signin',
            state: { nextPathname: nextState.location.pathname },
          });
        }
        done();
      });
}

class Root extends Component {
  render() {
    return (
        <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Signin} />
          <Route path="signin" component={Signin} />
          <Route path="signup" component={Signup} />
          <Route path="home" component={Home} onEnter={requireAuth} />
        </Route>
      </Router>
    );
  }
}

export default Root;
