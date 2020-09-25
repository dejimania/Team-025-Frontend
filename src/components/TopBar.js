import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { HiUserCircle } from 'react-icons/hi';
import { MdDashboard, MdNotificationsNone } from 'react-icons/md';
import { BiDonateBlood } from 'react-icons/bi';
import './topbar.css'
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="topbar mt-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/dashboard"><MdDashboard className="" size="1.2rem"/> Dashbaord</Nav.Link>
          <Nav.Link href="#link"><BiDonateBlood className="" size="1.2rem"/>Search</Nav.Link>
          <NavDropdown title="Quick" id="basic-nav-dropdown2">
            <NavDropdown.Item href="#action/3.1">Centers</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Banks</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Donate</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Get Help</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <MdNotificationsNone size="2rem"/>
        <NavDropdown  title={<HiUserCircle className="" size="2rem"/>}>
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Notifications</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Get Help</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopBar

