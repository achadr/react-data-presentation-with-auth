import React, { Component } from 'react'
import Textfield from '../Components/Textfield';
import Button from '../Components/Button'
import firebase from 'firebase'
import {Link} from 'react-router'
import Grid from '@material-ui/core/Grid'

class Signin extends Component {
    state = {
        password : '',
        email : ''
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    handleSignin = () => {
        let that=this
        firebase.auth().signInWithEmailAndPassword(that.state.email, that.state.password).then(function() {

             console.log('hello from the other side')

            that.props.router.push('home') 
            return   
          }).catch(function(error) {
         
             console.log(error) 
               
             console.log('hello from error')

            return   
          });
          
    }
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})   
    }
  render() {
      console.log(this.props)
    return (
        <Grid container direction='column' justify='center' alignItems='center'>

          <Textfield label='email' type='text' value={this.state.email} handleChange ={this.handleEmailChange} />
          <Textfield label='password' type='password' value={this.state.password} handleChange ={this.handlePasswordChange} />
          <Button handleClick={this.handleSignin} label='Sign in' />
          <Link to='signup'> Sign up </Link>

        </Grid>
    )
  }
}
export default Signin