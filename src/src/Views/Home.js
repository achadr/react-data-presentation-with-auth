import React, { Component } from 'react'
import firebase from 'firebase'
import Button from '../Components/Button'
import ClientsTable from '../Components/ClientsTable'
import Grid from '@material-ui/core/Grid'

class Home extends Component {
  state = {
      clients: []
  }
  handleSignout = () => {
      firebase.auth().signOut()
      this.props.router.push('')
  }
  componentDidMount () {
      let clientsRef = firebase.database().ref('/clients')
      clientsRef.on("value", (snapshot) =>{
          let clients = snapshot.val()
          this.setState({ clients })
      })
  }
  render() {
      console.log('clients', this.state.clients)
    return (
      <Grid container direction='column' justify='center' alignItems='center'>
        
        <ClientsTable clients={this.state.clients} />
        <Button handleClick={this.handleSignout} label='Sign out' />
      </Grid>
    )
  }
}
export default Home