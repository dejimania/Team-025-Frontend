import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" fixed="top" className="pt-3 pb-3">
			<Container>
				<Navbar.Brand as={NavLink} to="/">BloodNation</Navbar.Brand>
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
					<Nav className="border-left border-danger pl-5 ml-5">
						<Nav.Link href="#deets">Sign In</Nav.Link>
						<Button as={NavLink} to="/signup" variant="danger" className="ml-3">Signup</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default AppNavBar;

