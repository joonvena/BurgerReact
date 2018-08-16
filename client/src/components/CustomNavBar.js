import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavBar.css';

export default class CustomNavBar extends Component {
    render() {
        return (
           
            <Navbar default collapseOnSelect className="list">
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">BurgerLoversFinland</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>  
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Etusivu
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="/ravintolat" to="/ravintolat">
                            Ravintolat
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} href="/uusi" to="/uusi">
                            Lisää ravintola
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>      
            </Navbar>

        );
    }
}