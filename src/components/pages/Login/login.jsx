import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Login.css';
import { login } from '../../../services/userServices';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      EmailError: '',
      PasswordError: '',
      snackbarOpen: false,
      snackServicity: 'success',
      snackbarMessage: ''
    }
  }

  emailHandler = (event) => {
    this.setState({
      Email: event.target.value,
      EmailError: ''
    })
    console.log("email", this.state.Email)
  }
  passwordHandler = (event) => {
    this.setState({
      Password: event.target.value,
      PasswordError: ''
    })
    console.log("password", this.state.Password)
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setOpen(false);
  };
  
  Login = () => {
    if (!this.state.Email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) {
      this.setState({
        EmailError: "Email is not valid"
      })
    }
    if (!this.state.Password.match("[A-Za-z0-9!@#$%^&*()_]{6,20}")) {
      this.setState({
        PasswordError: "Password is not valid"
      })
    }
    if ((this.state.Email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) && (this.state.Password.match("[A-Za-z0-9!@#$%^&*()_]{6,20}"))) {
      const loginData = {
        email: this.state.Email,
        password: this.state.Password
      }

      login(loginData).then((responce) => {
        if (responce.status === 200) {
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "Login Successful",
            snackServicity: 'success'
          })
        }
        console.log("responce data==>", responce);
      }).catch((err) => {
        this.setState({
          snackbarOpen: true,
          snackbarMessage: "Login is UnSuccessful :Invalid Email Or Password",
          snackServicity: 'success'
        })
      })
    }
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
          <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
            <Alert onClose={this.handleClose} severity={this.state.snackServicity}>
              {this.state.snackbarMessage}
            </Alert>
          </Snackbar>
          <div className="fundooContainer">
            <div className="blue">F</div>
            <div className="red">u</div>
            <div className="yellow">n</div>
            <div className="blue">d</div>
            <div className="green">o</div>
            <div className="red">o</div>
          </div>
          <div >
            <TextField id="emailText" label="Email Id" variant="outlined" onChange={this.emailHandler} value={this.state.email} error={this.state.EmailError} helperText={this.state.EmailError} />
          </div>
          <div>
            <TextField id="passwordText" label="Password" variant="outlined" onChange={this.passwordHandler} value={this.state.password} error={this.state.PasswordError} helperText={this.state.PasswordError} {...this.props}
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