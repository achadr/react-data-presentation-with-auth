import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function InputWithIcon(props) {
  const { classes } = props;

  return (
    <div>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label= {props.label}
        value = {props.value}
        type={props.type}
        onChange ={props.handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.type==='text' ? <AccountCircle /> :
              <Lock/>
              }
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);
