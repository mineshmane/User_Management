import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Form from 'react-bootstrap/Form'
import { Button, FormGroup, FormControl, Form, Nav, Navbar } from "react-bootstrap";
import DrawerMenu from './sidenav'

import { MuiThemeProvider, createMuiTheme, } from '@material-ui/core';


const thm = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 56,
                width: 250,
                background: '#2B333E'
            },
            paperAnchorDockedLeft: {
                borderColor: "white"
            },
        },
        MuiAppBar: {
            colorPrimary: {
                color: 'black',
                backgroundColor: 'whitesmoke'
            },
            root: {
                left: 'auto',
            }
        },
    }
});
export default class HomeComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            // view: false,
            listgrid: false,
            searchNote: '',
            allLabels: [],
            isReminder: false,
            isTrash: false,
            isArchive: false,
            isNotes: true,
            view2: false

        }
    }

    handleToggle = () => {
        // this.props.slidecard();
        this.setState({ open: !this.state.open });



    }
    render() {

        return (

            <div >
                <MuiThemeProvider theme={thm}>
                    <Navbar bg="primary" variant="dark" >
                        <Navbar.Brand href="#home">User Management</Navbar.Brand>

                        <div onClick={this.handleToggle}>
                            <button  onClick={this.handleToggle} className="btn-toggle-fullwidth">
                                <i className="far fa-arrow-alt-circle-left"></i>

                            </button>
                        </div>
                       

                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home"></Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form> */}
                    </Navbar>
                    <div >

                        <DrawerMenu
                            appBarProps={this.state.open}
                            DrawerMenuToDashboard={this.DrawerMenuToDashboard}
                            props={this.props.props}
                        />
                    </div>
                   

                </MuiThemeProvider>
            </div>

        )
    }
}