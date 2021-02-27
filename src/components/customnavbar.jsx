import React, {Component} from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './customnavbar.css'

export default class CustomNavbar extends Component{
    render(){
        return(
            
            <div Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Feblic</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componenClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componenClass={Link} href="/about" to="/about">
                            About
                        </NavItem>
                        <NavItem eventKey={3} componenClass={Link} hef="/career" to="/career">
                            Career
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            
            </div>
        );
    }
}