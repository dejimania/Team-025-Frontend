import React, { useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { GiWaterDrop } from 'react-icons/gi';
import { VscRequestChanges } from 'react-icons/vsc';
import './dashboard.css'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { AppointmentHistory } from "../../components";

// Animation
// import { easeQuadInOut } from "d3-ease";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators
// import RadialSeparators from "./RadialSeparators";

const percentage = 50;

const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="dashboard">
      <h1 className="display-4 mb-4">Dashboard</h1>
      <Row className="mb-1">
        <Col xs="12" md="6" lg="3">
          <Card className="statistics-box blood-group">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="icon-box bg-danger d-flex">
                  <GiWaterDrop className="my-auto mx-auto" color="white" size="3rem"/>
                </div>
                <div className="text-right">
                  <h6 className="text-muted">Group</h6>
                  <h3>A+</h3>
                </div>
              </div>
              <hr/>
              <div className="d-flex justify-content-between align-items-center">
                <small>Your Blood Group</small>
                <Button variant="danger" as={Link} to="/appointments/book" size="sm">
                  Update
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="6" lg="3">
          <Card className="statistics-box blood-group">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="icon-box bg-danger d-flex">
                  <VscRequestChanges className="my-auto mx-auto" color="white" size="3rem"/>
                </div>
                <div className="text-right">
                  <h6 className="text-muted">Donated</h6>
                  <h3>12</h3>
                </div>
              </div>
              <hr/>
              <div className="d-flex justify-content-between align-items-center">
                <small>Your Total Donation</small>
                <Button variant="danger" as={Link} to="/requests" size="sm">
                  Donate
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="6" lg="3">
          <Card className="statistics-box blood-group">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="icon-box bg-danger d-flex">
                  <GiWaterDrop className="my-auto mx-auto" color="white" size="3rem"/>
                </div>
                <div className="text-right">
                  <h6 className="text-muted">Requests</h6>
                  <h3>5</h3>
                </div>
              </div>
              <hr/>
              <div className="d-flex justify-content-between align-items-center">
                <small>Your Total Requests</small>
                <Button variant="danger" size="sm">
                  Request
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="6" lg="3">
          <Card className="statistics-box blood-group">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="icon-box bg-danger p-3">
                  <div style={{width: '100%'}} className="mx-auto">
                  <CircularProgressbar
                    value={percentage}
                    // styles={{color: 'red'}}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "yellow"
                    })}
                  />
                </div>
                </div>
                <div className="text-right">
                  <h6 className="text-muted">Progress</h6>
                  <h3>50%</h3>
                </div>
              </div>
              <hr/>
              <div className="d-flex justify-content-between align-items-center">
                <small>Your Last Donation</small>
                <Button variant="danger" as={Link} to="/appointments/book" size="sm">
                  Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <AppointmentHistory/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard

