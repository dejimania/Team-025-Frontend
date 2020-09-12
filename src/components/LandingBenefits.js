import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { GiHealing, GiHealthPotion } from "react-icons/gi";
import { SiWorldhealthorganization } from "react-icons/si";

const LandingBenefits = () => {
  return (
    <div>
      <Container className="pb-5">
        <Row>
          <Col className="text-center">
            <h2 className="mt-5 display-4">Donation <br/>With Benefits</h2>
            <div className="ruler mb-5"></div>
          </Col>
        </Row>
        <Row className="text-center mb-3">
          <Col xs="12" md="4">
            <Card className="p-5 border border-danger">
              <GiHealing className="mx-auto" size="10rem" color="coral"/>
              <h3 className="display-4">100%</h3>
              <h5 className="text-secondary text-danger"><small>Social Badges</small></h5>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <Card className="p-5 border border-danger">
              <GiHealthPotion className="mx-auto" size="10rem" color="coral"/>
              <h3 className="display-4">100%</h3>
              <h5 className="text-secondary text-danger"><small>Free Care</small></h5>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <Card className="p-5 border border-danger">
              <SiWorldhealthorganization className="mx-auto" size="10rem" color="coral"/>
              <h3 className="display-4">100%</h3>
              <h5 className="text-secondary text-danger"><small>Int Recognition</small></h5>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingBenefits

