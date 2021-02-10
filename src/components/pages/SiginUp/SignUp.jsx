import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './SignUp.css'
import { Link } from 'react-router-dom';

export default class SignUP extends Component {
  constructor(props) {
    super(props);
  }
  handleButton = () => (
    this.props.history.push("\login")
  )
  handleLogin = () => {
    this.props.history.push("\login")
  }
  render() {
    return (
      <div className="HomeContainers">
        <Card className="cardContainers">
          <div className="fundooContainer">
            <div className="blue">F</div>
            <div className="red">u</div>
            <div className="yellow">n</div>
            <div className="blue">d</div>
            <div className="green">o</div>
            <div className="red">o</div>
          </div>
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
            <Button id="sign" variant="contained" onClick={this.handleButton} > SignUP </Button>
            <label htmlFor="ask" id="askForLogin">Have an account with us ?
            <Link onClick={this.handleLogin}>Login</Link></label>
          </div>
        </Card>
      </div>
    )
  }
}