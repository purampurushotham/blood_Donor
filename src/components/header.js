import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col, Navbar, NavItem, Nav,NavDropdown,MenuItem } from 'react-bootstrap'

export default class Header extends Component {
    render(){
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Blood Donation </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">Register</NavItem>
                    <NavItem eventKey={2} href="#">Search</NavItem>
                </Nav>
            </Navbar>
        )
    }
}