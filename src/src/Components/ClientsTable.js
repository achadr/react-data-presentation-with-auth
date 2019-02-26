import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });

class ClientsTable extends Component {
    state = {
        selectedClient: 2
    }
  handleClientClick = (selectedClient) => () => {
        this.setState({
            selectedClient,
        })
    }
  render() {
      const { classes }= this.props
      console.log('clients table', this.props.clients)
      return (
      <Grid container style={{width:'80%'}} direction='column' >
        <Paper style={{marginTop:'20px'}}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Prenom</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { this.props.clients.map((client, index) => (
                <TableRow className='tableHover' style={{backgroundColor :this.state.selectedClient===index ? 'lightblue' : 'white'}} onClick ={this.handleClientClick(index)} key={index}>
                    <TableCell>{client.lastname}</TableCell>
                    <TableCell>{client.firstname}</TableCell>
              </TableRow>
              )
           )}
        </TableBody>
      </Table>
           
        </Paper>
        <Paper style={{height:'70px',marginTop:'20px', display:'flex'}}>
             <Grid container direction='column' justify='center' alignItems='center'>
             Adresse : {'  '}
            { this.props.clients[this.state.selectedClient] &&  this.props.clients[this.state.selectedClient].address}
            </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(ClientsTable)
