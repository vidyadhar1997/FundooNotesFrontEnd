import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { TextField, Button } from '@material-ui/core';
import './ForgetPassword.css';

export default class ForgetPassword extends Component {
    render() {
        return (
            <div className="Forget">
                <Card className="cardsContainerForget">
                <div className="fundooContainer">
              <div className="blue">F</div>
              <div className="red">u</div>
              <div className="yellow">n</div>
              <div className="blue">d</div>
              <div className="green">o</div>
              <div className="red">o</div>
             </div>
                    <div>
                        <TextField id="emailForget" label="Email Id" variant="outlined" />
                    </div>
                    <div>
                        <Button id="submit" variant="contained" > Submit </Button>
                    </div>
                </Card>
            </div>
        )
    }
}