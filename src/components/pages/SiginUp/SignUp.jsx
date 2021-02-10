import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { signUp } from '../../../services/userServices';

export default class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      ConfirmPassword: '',
      FirstNameError: '',
      LastNameError: '',
      EmailError: '',
      PasswordError: '',
      ConfirmPasswordError: '',
      MatchingPasswordError: '',
      snackbarOpen: false,
      snackServicity: 'success',
      snackbarMessage: ''
    }
  }

  firstNameHandler = (event) => {
    this.setState({
      FirstName: event.target.value,
      FirstNameError: ''
    })
    console.log("first name", this.state.FirstName)
  };

  lastNameHandler = (event) => {
    this.setState({
      LastName: event.target.value,
      LastNameError: ''
    })
    console.log("last name", this.state.LastName)
  };

  emailHandlers = (event) => {
    this.setState({
      Email: event.target.value,
      EmailError: ''
    })
    console.log("email", this.state.Email)
  };

  passwordHandlers = (event) => {
    this.setState({
      Password: event.target.value,
      PasswordError: '',
      MatchingPasswordError: ''
    })
    console.log("password", this.state.Password)
  };

  confirmPasswordHandlers = (event) => {
    this.setState({
      ConfirmPassword: event.target.value,
      ConfirmPasswordError: '',
      MatchingPasswordError: ''
    })
    console.log("confiem password", this.state.ConfirmPassword)
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setOpen(false);
  };
  
  handleSignUp = () => {
    if (!this.state.FirstName.match("^[A-Z]{1}[a-z]{2,}$")) {
      this.setState({
        FirstNameError: "First Name is not valid"
      })
    }

    if (!this.state.LastName.match("[A-Z]{1}[a-z]{2,}$")) {
      this.setState({
        LastNameError: "Last Name is not valid"
      })
    }

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
    if (!this.state.ConfirmPassword.match("[A-Za-z0-9!@#$%^&*()_]{6,20}")) {
      this.setState({
        ConfirmPasswordError: "Confirm Password is not valid"
      })
    }
    if (this.state.ConfirmPassword != this.state.Password) {
      this.setState({
        MatchingPasswordError: "Password and confirm password not same"
      })
    }
    if ((this.state.Email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) &&
      (this.state.Password.match("[A-Za-z0-9!@#$%^&*()_]{6,20}")) && (this.state.FirstName.match("^[A-Z]{1}[a-z]{2,}$"))
      && (this.state.LastName.match("[A-Z]{1}[a-z]{2,}$")) && (this.state.ConfirmPassword.match("[A-Za-z0-9!@#$%^&*()_]{6,20}")) && (this.state.ConfirmPassword === this.state.Password)) {
      const signUpData = {
        firstName: this.state.FirstName,
        lastName: this.state.LastName,
        email: this.state.Email,
        password: this.state.Password
      }

      signUp(signUpData).then((responce) => {
        if (responce.status === 200) {
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "Registration Successful",
            snackServicity: 'success'
          })
        
          setTimeout (()=>{
            this.props.history.push("\login")
         },5000)
        }
        console.log("responce data==>", responce);
      }).catch(async(err) => {
        console.log("error is =",err.responce.data.error);
       
         this.setState({
          snackbarOpen: true,
          snackbarMessage: "Registration UnSuccessful",
          snackServicity: 'err'
        })
      })
    }
  }
  handleLogin = () => {
    this.props.history.push("\login")
  }

  render() {
    return (
      <div className="HomeContainers">
        <Card className="cardContainers">
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
          <div class="name">
            <TextField id="MuiOutlinedInput-input" label="First Name" variant="outlined" onChange={this.firstNameHandler} value={this.state.firstName} error={this.state.FirstNameError} helperText={this.state.FirstNameError} />
            <TextField id="MuiOutlinedInput-input" label="Last Name" variant="outlined" onChange={this.lastNameHandler} value={this.state.lastName} error={this.state.LastNameError} helperText={this.state.LastNameError} />
          </div>
          <div >
            <TextField id="emailTexts" label="Email Id" variant="outlined" onChange={this.emailHandlers} value={this.state.email} error={this.state.EmailError} helperText={this.state.EmailError} />
          </div>
          <div>
            <TextField id="passwordTexts" label="Password" variant="outlined" onChange={this.passwordHandlers} value={this.state.password} error={((this.state.PasswordError) || (this.state.MatchingPasswordError))} helperText={((this.state.PasswordError) || (this.state.MatchingPasswordError))} {...this.props}
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
            <TextField id="confirmPasswordText" label="Confirm Password" variant="outlined" onChange={this.confirmPasswordHandlers} value={this.state.confirmPassword} error={((this.state.ConfirmPasswordError) || (this.state.MatchingPasswordError))} helperText={((this.state.ConfirmPasswordError) || (this.state.MatchingPasswordError))} {...this.props}
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