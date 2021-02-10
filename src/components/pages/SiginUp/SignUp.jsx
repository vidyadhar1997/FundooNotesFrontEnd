import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { signUp } from '../../../services/userServices';

export default class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName:'',
      LastName:'',
      Email:'',
      Password:''
  }
  }

  firstNameHandler = (event) => {
    this.setState({
      FirstName: event.target.value
  })
  console.log("first name",this.state.FirstName)
};

lastNameHandler = (event) => {
  this.setState({
    LastName: event.target.value
})
console.log("last name",this.state.LastName)
};

emailHandlers = (event) => {
  this.setState({
    Email: event.target.value
})
console.log("email",this.state.Email)
};

passwordHandlers = (event) => {
this.setState({
  Password: event.target.value
})
console.log("password",this.state.Password)
};

handleSignUp = () => {
    console.log("dhirajs");
    const signUpData={
      firstName:this.state.FirstName,
      lastName:this.state.LastName,
      email:this.state.Email,
      password:this.state.Password
    }
    
    signUp(signUpData).then((responce)=>{
    if(responce.data.status === true){
      console.log("Registration successful!")
        this.props.history.push("\login")
    }
      console.log("responce data==>",responce);
    }).catch((err)=>{
      console.log(err);
    })
  }

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
            <TextField id="MuiOutlinedInput-input" label="First Name" variant="outlined" onChange={this.firstNameHandler} value={this.state.firstName} />
            <TextField id="MuiOutlinedInput-input" label="Last Name" variant="outlined" onChange={this.lastNameHandler} value={this.state.lastName}/>
          </div>
          <div >
            <TextField id="emailTexts" label="Email Id" variant="outlined" onChange={this.emailHandlers} value={this.state.email} />
          </div>
          <div>
            <TextField id="passwordTexts" label="Password" variant="outlined" onChange={this.passwordHandlers} value={this.state.password} {...this.props}
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
            <Button id="sign" variant="contained" onClick={this.handleSignUp} > SignUP </Button>
            <label htmlFor="ask" id="askForLogin">Have an account with us ?
            <Link onClick={this.handleLogin}>Login</Link></label>
          </div>
        </Card>
      </div>
    )
  }
}