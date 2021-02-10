import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './ForgetPassword.css';
import { forgot } from '../../../services/userServices';

export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
        }
    }

    emailsHandler = (event) => {
        this.setState({
          Email: event.target.value
      })
      console.log("email",this.state.Email)
    };

    forgetHandler=()=>{
        console.log("dhiraj");
       let email=this.state.Email;
     
      forgot(email).then((responce)=>{
      if(responce.data.status === true){
                  console.log("forgot password successful!")
                  this.props.history.push("\login")
                }
        console.log("responce data==>",responce);
      }).catch((err)=>{
        console.log(err);
      })
      }

    handleBackButton = () => {
        this.props.history.push('/login');
    }
    
    render() {
        return (
            <div className="Forget">
                <Card className="cardsContainerForget">
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
                        <TextField id="emailForget" label="Email Id" variant="outlined" onChange={this.emailsHandler} value={this.state.email}  />
                    </div>
                    <div>
                        <Button id="submit" variant="contained"onClick={this.forgetHandler} > Submit </Button>
                    </div>
                </Card>
            </div>
        )
    }
}