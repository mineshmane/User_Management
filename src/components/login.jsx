import React, { Component } from 'react';

// import React, { useState } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
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
                <div className="auth-box">


                    <form onSubmit={this.handleSubmit}>
                        <div className="image-center" >
                            <img id="img-circle" className=" img-thumbnail" src={require('../assets/mi-logo.jpg')}></img>
                        </div>
                        <div className=" heading ">
                            <h4> login to your account</h4>

                        </div>
                        <div>

                            <FormGroup controlId="email" bsSize="large">

                                <FormControl className="input"
                                placeholder="UserName"
                                    autoFocus
                                    type="email"
                                    value={this.email}
                                    onChange={this.handleSubmit}
                                />
                            </FormGroup>
                        </div>
                        <div className="margin-top">

                            <FormGroup controlId="password" bsSize="large">

                                <FormControl className="input"
                                placeholder="Password"
                                    value={this.password}
                                    onChange={this.handleSubmit}
                                    type="password"
                                />
                            </FormGroup>
                        </div>
                        <div className="margin-top">

                            <Button className="btn btn-primary btn-lg btn-block" disabled={!this.validateForm} type="submit">
                                Login  </Button>
                        </div>
                        <div className="rowImage">

                            <div>

                                <img id="img-circle" className="lock-thumbnail" src={require('../assets/lock.png')}></img>

                            </div>
                            <div>
                                <span>forgetpassword</span>

                            </div>



                        </div>

                    </form>

                </div>

            </div>
        )
    }
}