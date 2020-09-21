import React, { useEffect } from "react";
import { Row, Col, Card, Button, Table, ProgressBar } from "react-bootstrap";
import { GiWaterDrop } from 'react-icons/gi';
import { VscRequestChanges } from 'react-icons/vsc';
import './dashboard.css'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

const percentage = 66;

const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="dashboard">
      <h1 className="display-4">Dashboard</h1>
      <Row>
        <Col xs="12" md="4">
          <Card className="statistics-box blood-group bg-danger text-white text-center">
            <Card.Body>
              <h5>Blood Group</h5>
              <div className="group">
                <span className="display-4 my-auto">A+</span>
              </div>
              <p className="mt-2 mb-0">Confirmed at EKO Hospital</p>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card className="statistics-box donation text-center text-danger">
            <Card.Body className="d-flex justify-content-around">
              <Button variant="outline-danger" className="p-3 w-50 mr-4 text-center">
                <GiWaterDrop className="my-auto mx-auto" size="6rem"/><br/>
                DONATE NOW
              </Button>
              <Button variant="outline-danger" className="p-3 w-50 text-center">
                <VscRequestChanges className="my-auto mx-auto" size="6rem"/><br/>
                RECEIVE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="4">
          <Card className="statistics-box text-center">
            <Card.Body>
              <h5>Donation Progress</h5>
              <div style={{width: '27%'}} className="mx-auto">
                <CircularProgressbar
                  value={percentage}
                  // styles={{color: 'red'}}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: "red",
                    pathColor: "red",
                    trailColor: "grey"
                  })}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-5">
          <h4>Donation History</h4>
          <Card>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Hospital</th>
                    <th>Progress</th>
                    <th>Phone</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>July 20th, 2020</td>
                    <td>Eko Hospital, Ikeja</td>
                    <td><ProgressBar variant="info" now={66} label='66%' /></td>
                    <td>+234 802 283 5496</td>
                    <td>larrysnet2001@gmail.com</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>August 21th, 2020</td>
                    <td>Eko Hospital, Ikeja</td>
                    <td><ProgressBar variant="success" now={100} label='100%' /></td>
                    <td>+234 802 283 5496</td>
                    <td>larrysnet2001@gmail.com</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Sept 20th, 2020</td>
                    <td>Eko Hospital, Ikeja</td>
                    <td><ProgressBar variant="success" now={100} label='100%' /></td>
                    <td>+234 802 283 5496</td>
                    <td>larrysnet2001@gmail.com</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard

