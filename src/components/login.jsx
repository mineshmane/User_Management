import React, { Component } from 'react';
import { connect } from 'react-redux';
// import React, { useState } from "react";
import { Button, FormGroup, FormControl, } from "react-bootstrap";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Bootstrap from "react-bootstrap";


import { LoginUser } from '../actions';



// const mapDispatchToProps = {
//     LoginUser: LoginUser,

// };
// const mapDispatchToProps =(LoginUser)=>{
//     return {
//         // state : state
//         LoginUser: LoginUser,
//     }
// }

// console.log("mapprops ",mapDispatchToProps);


 class LoginComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this)

    }
    handleChange = (e) => {
        console.log(" e ",e.currentTarget.name);

        this.setState({ [e.target.name]: e.target.value })

    }

    login() {
        // e.preventDefault();
        // console.log(" e in login ", e.target.name);

        console.log(" thias staee", this.state);

        var data = {}
        data.email = this.state.email;
        data.password = this.state.password

        console.log("data", data);
        // this.dispatchEvent({data:data})


        // mapDispatchToProps(this.props.Login,{data:data})
        // console.log(" after data assign  ",mapDispatchToProps);
        this.props.login(data)
        
    }


    validateForm() {
        return this.email.length > 0 && this.password.length > 0;
    }


    render() {


        // const { email, password } = this.state;
        // console.log("email is ",email,this.state);
        
        return (

            <div className="Login">
                <div className="auth-box">


                    <form onSubmit={this.login}>
                        <div className="image-center" >
                            <img id="img-circle" className=" img-thumbnail" src={require('../assets/mi-logo.jpg')}></img>
                        </div>
                        <div className=" heading ">
                            <h4> login to your account</h4>

                        </div>
                        <div>

                            <FormGroup >

                                <FormControl className="input"
                                    placeholder="UserName"
                                    autoFocus
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={(e)=>this.handleChange(e)}
                                />

                            </FormGroup>
                        </div>
                        <div className="margin-top">

                            <FormGroup >

                                <FormControl className="input"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                        </div>
                        <div className="margin-top">

                            <Button className="btn btn-primary btn-lg btn-block" onClick={this.login}   disabled={!this.validateForm} >
                              
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



const mapStateToProps = (state, ownProps) => {
    return {
    //   data: this.state,
    //   status: state.login.status,
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (data) => dispatch({type:"LOGIN", data}),
      logout: () => dispatch({type:"LOGOUT"}),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
// LoginComponent = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
