import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { HiUserCircle } from 'react-icons/hi';
import { MdDashboard, MdNotificationsNone } from 'react-icons/md';
import './topbar.css'
import { Link } from 'react-router-dom';
import { SET_SIDEBAR } from '../store/types/sideBarTypes';

const TopBar = () => {

  const dispatch = useDispatch()

  return (
    <Navbar bg="light" expand="lg" className="topbar mt-3">
        <Navbar.Brand className="d-block d-md-none" href="/">Bloodnation</Navbar.Brand>
        <Nav className="d-none d-md-block">
          <Nav.Link as={Link} className="pl-0 mr-3" to="/dashboard"><MdDashboard size="1.2rem"/> Dashbaord</Nav.Link>
        </Nav>
        <div className="ml-auto d-flex align-items-center">
          <MdNotificationsNone size="2rem"/>
          <NavDropdown  title={<HiUserCircle className="" size="2rem"/>}>
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Notifications</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Get Help</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=> dispatch({type: SET_SIDEBAR})} />
        </div>
    </Navbar>
  )
}

export default TopBar

