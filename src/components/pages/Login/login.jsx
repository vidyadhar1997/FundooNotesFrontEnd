import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Login.css';
import { login } from '../../../services/userServices';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password:''
  }
  }

  emailHandler = (event) => {
    this.setState({
      Email: event.target.value
  })
  console.log("email",this.state.Email)
};

passwordHandler = (event) => {
  this.setState({
    Password: event.target.value
})

console.log("password",this.state.Password)
};

Login=()=>{
  console.log("dhiraj");
const loginData={
  email:this.state.Email,
  password:this.state.Password
}

login(loginData).then((responce)=>{
if(responce.data.status === true){
            console.log("login successful!")
          }
  console.log("responce data==>",responce);
}).catch((err)=>{
  console.log(err);
})
}

  handleSignUP = () => {
    this.props.history.push('/signup');
  }

  handleForgetLink = () => {
    this.props.history.push('/forget');
  }

  render() {
    return (
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
            <TextField id="emailText" label="Email Id" variant="outlined" onChange={this.emailHandler} value={this.state.email} />
          </div>
          <div>
            <TextField id="passwordText" label="Password" variant="outlined" onChange={this.passwordHandler} value={this.state.password} {...this.props}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
            <div class="link">
              <label onClick={this.handleForgetLink}>Forgot Password</label>
            </div>
          </div>
          <div>
            <Button variant="contained" onClick={this.Login}> Login </Button>
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