import React, { Component } from 'react'
import Textfield from '../Components/Textfield';
import Button from '../Components/Button'
import firebase from 'firebase'
import {Link} from 'react-router'
import Grid from '@material-ui/core/Grid'


class Signup extends Component {
    state = {
        password : '',
        email : ''
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
        console.log(this.state.email)
    }
    handleSignup = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})   
    }
  render() {
    return (
      <Grid container direction='column' justify='center' alignItems='center'>
      
          <Textfield label='email' type='text' value={this.state.email} handleChange ={this.handleEmailChange} />
          <Textfield label='password' type='password' value={this.state.password} handleChange ={this.handlePasswordChange} />
          <Button handleClick={this.handleSignup} label='Sign up' />
          <Link to='signin'> Sign in </Link>
      </Grid>
    )
  }
}
export default Signup