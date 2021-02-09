import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './ResetPassword.css';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
}
  handleReset = () => {
  this.props.history.push('/login');
}
  render() {
    return (
      <div className="Reset">
        <Card className="cardContainerReset">
        <div className="fundooContainer">
              <div className="blue">F</div>
              <div className="red">u</div>
              <div className="yellow">n</div>
              <div className="blue">d</div>
              <div className="green">o</div>
              <div className="red">o</div>
        </div>
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
            <Button id="Submit" variant="contained" onClick={this.handleReset} > Submit </Button>
          </div>
        </Card>
      </div>
    )
  }
}