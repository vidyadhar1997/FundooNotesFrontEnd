import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Login.css';

export default class Login extends Component{
  constructor(props) {
    super(props);
}
handleSignUP = () => {
    this.props.history.push('/signup');
}
handleForgetLink = () => {
  this.props.history.push('/forget');
}
 render(){
        return(
           <div className="HomeContainer">
            <Card className="cardContainer">
              <div className="fundooContainer">
              <div className="blue">F</div>
              <div className="red">u</div>
              <div className="yellow">n</div>
              <div className="blue">d</div>
              <div className="green">o</div>
              <div className="red">o</div>
              </div>
            <div >
            <TextField id="emailText" label="Email Id" variant="outlined" />
            </div>
            <div>
                <TextField id="passwordText" label="Password" variant="outlined" {...this.props}
                 InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityIcon />
                      </InputAdornment>
                    ),
                  }}
                  />
                    <div class="link">
                    <label  onClick={this.handleForgetLink}>Forgot Password</label>
                </div>
          </div>
          <div>
          <Button  variant="contained" > Login </Button>
          </div>
          <div className="lables">
              <label>Dont have an account with us?</label>
          </div>
          <div>
          <Button variant="contained" onClick={this.handleSignUP}> SignUP </Button>
          </div>
            </Card>
            </div>
        )
    }
}