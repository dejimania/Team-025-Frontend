import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import fb from '../assets/images/partners/logo_facebook.png';
import andela from '../assets/images/partners/Andela-logo.png';
import who from '../assets/images/partners/World_Health_Organization_logo_logotype.png';
import unicef from '../assets/images/partners/UNICEF_Logo.png';

const LandingPartners = () => {
  return (
    <div className="bg-danger text-white text-center pt-5 pb-5" style={{backgroundColor: 'coral'}}>
      <Container className="pt-3 pb-3">
        <Row>
          <Col xs="12" md="6" lg="3">
            <img src={fb} width="200" className="m-4" alt="Facebook"/>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={andela} width="200" className="m-4"  alt="Andela"/>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={who} width="200" className="m-4"  alt="WHO"/>
          </Col>
          <Col xs="12" md="6" lg="3">
            <img src={unicef} width="200" className="m-4"  alt="Unicef"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPartners

