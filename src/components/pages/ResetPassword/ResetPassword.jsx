import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './ResetPassword.css';

export default class ResetPassword extends Component {
  render() {
    return (
      <div className="Reset">
        <Card className="cardContainerReset">
          <div >
            <TextField id="emailReset" label="Email Id" variant="outlined" />
          </div>
          <div>
            <TextField id="passwordReset" label="Password" variant="outlined" {...this.props}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <TextField id="confirmPasswordReset" label="Confirm Password" variant="outlined" {...this.props}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div>
            <Button id="Submit" variant="contained" > Submit </Button>
          </div>
        </Card>
      </div>
    )
  }
}