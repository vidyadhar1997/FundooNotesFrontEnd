import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import './ForgetPassword.css';
import { forgot } from '../../../services/userServices';

export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            EmailError: '',
            snackbarOpen: false,
            snackServicity: 'success',
            snackbarMessage: ''
        }
    }

    emailsHandler = (event) => {
        this.setState({
            Email: event.target.value,
            EmailError: ''
        })
        console.log("email", this.state.Email)
    };

    handleClose = (event, reason) => {
        this.setState({
          snackbarOpen:false
        })
      };

    forgetHandler = () => {
        if (!this.state.Email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) {
            this.setState({
                EmailError: "Email is not valid"
            })
        }

        if (this.state.Email.match("^[a-zA-Z0-9]{1,}([.]?[-]?[+]?[a-zA-Z0-9]{1,})?[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-z]{2,3}([.]?[a-z]{2})?$")) {
            let email = this.state.Email;
            forgot(email).then((responce) => {
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
                console.log("error is =",error);
                this.setState({
                    snackbarOpen: true,
                    snackbarMessage: "Forgot Password Unsuccessfull",
                    snackServicity: 'error'
                })
            })
        }
    }


    handleBackButton = () => {
        this.props.history.push('/login');
    }
    render() {
        return (
            <div className="Forget">
                <Card className="cardsContainerForget">
                    <Snackbar open={this.state.snackbarOpen} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.snackServicity}>
                            {this.state.snackbarMessage}
                        </Alert>
                    </Snackbar>
                    <div className="arrow" onClick={this.handleBackButton}>
                        <ArrowBackIcon></ArrowBackIcon>
                    </div>
                    <div className="fundooContainer">
                        <div className="blue">F</div>
                        <div className="red">u</div>
                        <div className="yellow">n</div>
                        <div className="blue">d</div>
                        <div className="green">o</div>
                        <div className="red">o</div>
                    </div>
                    <div>
                        <TextField id="emailForget" label="Email Id" variant="outlined" onChange={this.emailsHandler} value={this.state.email} error={this.state.EmailError} helperText={this.state.EmailError} />
                    </div>
                    <div>
                        <Button id="submit" variant="contained" onClick={this.forgetHandler} > Submit </Button>
                    </div>
                </Card>
            </div>
        )
    }
}