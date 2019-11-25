import React, { Component } from 'react';

// import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Bootstrap from "react-bootstrap";
export default class LoginComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    validateForm() {
        return this.email.length > 0 && this.password.length > 0;
    }

    render() {
        return (

            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        {/* <ControlLabel>Email</ControlLabel> */}
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.email}
                            onChange={this.handleSubmit}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        {/* <ControlLabel>Password</ControlLabel> */}
                        <FormControl
                            value={this.password}
                            onChange={this.handleSubmit}
                            type="password"
                        />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!this.validateForm} type="submit">
                        Login
        </Button>
                </form>
            </div>
        )
    }
}