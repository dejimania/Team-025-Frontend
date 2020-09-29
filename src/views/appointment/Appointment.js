import React, { useEffect } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import map from '../../assets/images/staticmap.png'
import useAppointment from '../../hooks/useAppointment';

const Appointment = () => {

  const { isLoading, appointment } = useAppointment()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  // console.log(appointment)

  if(isLoading){
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  return (
    <div className="pb-5">
      <h1 className="display-4 mb-4">Appointment</h1>
      <Row>
        <Col xs="12" md="5">
          <Card>
            <Card.Body>
              <img src={map} alt="map" className="img-thumbnail"/>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="7">
          <Card>
            <Card.Body>
              <h2>{appointment && appointment.hospital.name}</h2>
              <h4>{appointment.hospital.address}</h4>
              <h4>{appointment.hospital.lg}, {appointment.hospital.state}</h4>
              ...
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Appointment

