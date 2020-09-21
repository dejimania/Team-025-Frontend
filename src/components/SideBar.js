import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Nav } from "react-bootstrap";
import { HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { VscRequestChanges, VscCalendar, VscHistory } from 'react-icons/vsc';
import { RiBankCardLine } from 'react-icons/ri';
import { GiWaterDrop } from 'react-icons/gi';
import { BiDonateBlood, BiPowerOff } from 'react-icons/bi';
import { GrConnectivity } from 'react-icons/gr';
import './sidebar.css'

const SideBar = () => {

  useEffect(() => {
  }, [])

  const { email, firstname, lastname } = useSelector(state => state.auth.user);

  return (
    <>
      <div className="header">
        <div className="brand bg-danger">
          <h4 className="text-white">BLOODNATION</h4>
        </div>
        <div className="user d-flex ml-4 mt-4 mr-4">
          <HiUserCircle size="4rem"/>
          <h5 className="my-auto text-left ml-3" style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
            {firstname} {lastname || 'Welcome'} <br/>
            <small>{email}</small>
          </h5>
        </div>
      </div>
      <Nav defaultActiveKey="/dashbaord" className="navs">
        <Nav.Link href="/dashboard" className="active"><MdDashboard className="mr-4" size="1.5rem"/>Dashboard</Nav.Link>
        <Nav.Link eventKey="link-1"><VscRequestChanges className="mr-4" size="1.5rem"/>Requests</Nav.Link>
        <Nav.Link eventKey="link-2"><VscCalendar className="mr-4" size="1.5rem"/>Appointments</Nav.Link>
        <Nav.Link eventKey="link-2"><VscHistory className="mr-4" size="1.5rem"/>History</Nav.Link>
        <div className="bg-danger w-75 mb-3 mt-1 mx-auto" style={{height: '0.1rem', opacity: '0.3'}}></div>
        <Nav.Link eventKey="link-2"><RiBankCardLine className="mr-4" size="1.5rem"/>Banks</Nav.Link>
        <Nav.Link eventKey="link-2"><GiWaterDrop className="mr-4" size="1.5rem"/>Centers</Nav.Link>
        <Nav.Link eventKey="link-2"><BiDonateBlood className="mr-4" size="1.5rem"/>Donors</Nav.Link>
        <Nav.Link eventKey="link-2"><GrConnectivity className="mr-4" size="1.5rem"/>Matches</Nav.Link>
        <div className="bg-danger w-75 mb-3 mt-1 mx-auto" style={{height: '0.1rem', opacity: '0.3'}}></div>
        {/* <Nav.Link eventKey="link-2"><HiUserCircle className="mr-4" size="1.5rem"/>Profile</Nav.Link>
        <Nav.Link eventKey="link-2"><MdNotificationsNone className="mr-4" size="1.5rem"/>Notifications</Nav.Link> */}
        <Nav.Link eventKey="link-2"><BiPowerOff className="mr-4" size="1.5rem"/>logout</Nav.Link>
      </Nav>
    </>
  )
}

export default SideBar

