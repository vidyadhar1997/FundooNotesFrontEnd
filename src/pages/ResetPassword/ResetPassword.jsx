import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button, InputAdornment } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './ResetPassword.css';
import { reset } from '../../services/userServices';

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Password: '',
      ConfirmPassword: '',
      EmailError: '',
      PasswordError: '',
      ConfirmPasswordError: '',
      MatchingPasswordError: '',
      snackbarOpen: false,
      snackServicity: 'success',
      snackbarMessage: '',
      visability: false,
      visabilityTwo: false
    }
  }

  emailsHandlers = (event) => {
    this.setState({
      Email: event.target.value,
      EmailError: ''
    })
    console.log("email", this.state.Email)
  };

  resertpasswordHandlers = (event) => {
    this.setState({
      Password: event.target.value,
      PasswordError: ''
    })
    console.log("password", this.state.Password)
  };

  confirmPasswordHandlers = (event) => {
    this.setState({
      ConfirmPassword: event.target.value,
      ConfirmPasswordError: ''
    })
    console.log("password", this.state.ConfirmPassword)
  };

  handleClose = (event, reason) => {
    this.setState({
      snackbarOpen:false
    })
  };

  visbleIconHandler = (event) => {
    this.state.visability ? this.setState({ visability: false })
      : this.setState({ visability: true })
  }

  visbleIconHandlerTwo = (event) =>{
    this.state.visabilityTwo ? this.setState({ visabilityTwo: false })
      : this.setState({ visabilityTwo: true })
}

handleReset = () => {
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
  if ((this.state.Email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$"))
    && (this.state.Password.match("[A-Za-z0-9!@#$%^&*()_]{6,20}")) &&
    (this.state.ConfirmPassword.match("[A-Za-z0-9!@#$%^&*()_]{6,20}"))
    && (this.state.ConfirmPassword === this.state.Password)) {
    const resetData = {
      email: this.state.Email,
      password: this.state.Password,
      confirmPassword: this.state.ConfirmPassword,
    }

    reset(resetData).then((responce) => {
      if (responce.status === 200) {
        this.setState({
          snackbarOpen: true,
          snackbarMessage: responce.data.message,
          snackServicity: 'success'
        })
        setTimeout(() => {
          this.props.history.push("\login")
        }, 4000)
      }
      console.log("responce data==>", responce);
    }).catch((error) => {
      console.log("error is =", error);
      this.setState({
        snackbarOpen: true,
        snackbarMessage:"Reset Password Unsuccessfull",
        snackServicity: 'error'
      })
    })
  }
}

render() {
  return (
    <div className="Reset">
      <Card className="cardContainerReset">
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
          <TextField id="emailReset" label="Email Id" variant="outlined" onChange={this.emailsHandlers} value={this.state.email} error={this.state.EmailError} helperText={this.state.EmailError} />
        </div>
        <div>
          <TextField id="passwordReset" label="Password" variant="outlined"
            onChange={this.resertpasswordHandlers}
            value={this.state.password} value={this.state.password}
            error={((this.state.PasswordError) || (this.state.MatchingPasswordError))}
            helperText={((this.state.PasswordError) || (this.state.MatchingPasswordError))}
            type={this.state.visabilityTwo ? 'text' : 'password'}{...this.props}
            InputProps={{
              endAdornment: (
                <div onClick={this.visbleIconHandlerTwo}>
                  <InputAdornment position="end"  id="visibility">
                    {this.state.visabilityTwo ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </InputAdornment>
                </div>
              ),
            }}
          />
        </div>
        <div>
          <TextField id="confirmPasswordReset" label="Confirm Password" variant="outlined"
            onChange={this.confirmPasswordHandlers} value={this.state.confirmPassword}
            value={this.state.confirmPassword}
            error={((this.state.ConfirmPasswordError) || (this.state.MatchingPasswordError))}
            helperText={((this.state.ConfirmPasswordError) || (this.state.MatchingPasswordError))}
            type={this.state.visability ? 'text' : 'password'}{...this.props}
            InputProps={{
              endAdornment: (
                <div onClick={this.visbleIconHandler}>
                  <InputAdornment position="end"  id="visibility">
                    {this.state.visability ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </InputAdornment>
                </div>
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
