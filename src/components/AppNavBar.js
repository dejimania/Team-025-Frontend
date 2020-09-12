import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './nav.css';

const AppNavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" fixed="top" className="pt-3 pb-3">
			<Container>
				<Navbar.Brand as={NavLink} to="/" className="text-uppercase">BloodNation</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#features">About</Nav.Link>
						<NavDropdown title="Features" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Tracking</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Badge</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="#pricing">Centers</Nav.Link>
						<Nav.Link href="#pricing">Partners</Nav.Link>
						<Nav.Link href="#pricing">Faq</Nav.Link>
						<Nav.Link href="#pricing">Contact</Nav.Link>
					</Nav>
					<Nav className="pl-0 ml-0 pl-md-5 ml-md-5">
						<Nav.Link href="#deets" as={NavLink} to="/signin">Sign In</Nav.Link>
						<Button as={NavLink} to="/signup" variant="light" className="ml-0 ml-md-3">Signup</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default AppNavBar;

