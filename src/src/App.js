import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import Navbar from './Components/Navbar'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqOW0BTx14Bx6pL1BsV6vMhhp_cX5biMY",
    authDomain: "baracoda-test.firebaseapp.com",
    databaseURL: "https://baracoda-test.firebaseio.com",
    projectId: "baracoda-test",
    storageBucket: "baracoda-test.appspot.com",
    messagingSenderId: "967343334065"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
