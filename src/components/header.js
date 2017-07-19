import React, { Component, PropTypes } from 'react'
import { Grid, Row, Col, Navbar, Panel,NavItem, Nav,NavDropdown,MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import autobind from 'autobind-decorator'

@autobind
export default class Header extends Component {
    constructor (props){
        super(props)
        console.log("header")
        console.log(this.props)
        console.log("header")
    }
    render(){

        return (
            <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Blood Donation </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to='/' >
                        <NavItem>Register</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/search' >
                        <NavItem>Search</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <Grid>
            <Row className="show-grid">
            <Col md={6}>
                {this.props.children}
            </Col>
            </Row>
            </Grid>
            </div>
    )
    }
}
Header.propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.object
}
