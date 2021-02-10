import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './ResetPassword.css';
import { reset } from '../../../services/userServices';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password:'',
      ConfirmPassword:''
  }
  }

  emailsHandlers = (event) => {
    this.setState({
      Email: event.target.value
  })
  console.log("email",this.state.Email)
  };
  
  resertpasswordHandlers = (event) => {
  this.setState({
    Password: event.target.value
  })
  console.log("password",this.state.Password)
  };

  confirmPasswordHandlers = (event) => {
    this.setState({
      ConfirmPassword: event.target.value
    })
    console.log("password",this.state.ConfirmPassword)
    };

  handleReset = () => {
    console.log("dhirajs");
    const resetData ={
      email:this.state.Email,
      password:this.state.Password,
      confirmPassword:this.state.ConfirmPassword,
    }
    
    reset(resetData).then((responce)=>{
    if(responce.data.status === true){
      console.log("Reset Password successful!")
        this.props.history.push("\login")
    }
      console.log("responce data==>",responce);
    }).catch((err)=>{
      console.log(err);
    })
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
            <TextField id="emailReset" label="Email Id" variant="outlined" onChange={this.emailsHandlers} value={this.state.email}/>
          </div>
          <div>
            <TextField id="passwordReset" label="Password" variant="outlined" onChange={this.resertpasswordHandlers} value={this.state.password} {...this.props}
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
            <TextField id="confirmPasswordReset" label="Confirm Password" variant="outlined" onChange={this.confirmPasswordHandlers} value={this.state.confirmPassword} {...this.props}
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