import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './SignUp.css'

export default class SignUP extends Component {
  render() {
    return (
      <div className="HomeContainers">
        <Card className="cardContainers">
          <div class="name">
            <TextField id="MuiOutlinedInput-input" label="First Name" variant="outlined" />
            <TextField id="MuiOutlinedInput-input" label="Last Name" variant="outlined" />
          </div>
          <div >
            <TextField id="emailTexts" label="Email Id" variant="outlined" />
          </div>
          <div>
            <TextField id="passwordTexts" label="Password" variant="outlined" {...this.props}
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
            <TextField id="confirmPasswordText" label="Confirm Password" variant="outlined" {...this.props}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="labless">
            <Button id="sign" variant="contained" > SignUP </Button>
            <h3>Have an account with us?<a href="http://localhost:8080/login">Login</a></h3>
          </div>
        </Card>
      </div>
    )
  }
}