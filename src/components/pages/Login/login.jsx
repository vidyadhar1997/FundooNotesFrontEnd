import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Login.css';

export default class Login extends Component{
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
          </div>
          <div>
          <Button  variant="contained" > Login </Button>
          </div>
          <div className="lables">
              <label>Dont have an account with us?</label>
          </div>
          <div>
          <Button  variant="contained"> SignUP </Button>
          </div>
            </Card>
            </div>
        )
    }
}