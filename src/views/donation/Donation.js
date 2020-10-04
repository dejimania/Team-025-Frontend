import React, { useEffect } from 'react';
import { Card, Col, Row, Spinner, Badge } from 'react-bootstrap';
import map from '../../assets/images/staticmap.png'
import useAppointment from '../../hooks/useAppointment';
import { formatDateWithTime } from '../../utils/helpers';

const Donation = () => {

  const { isLoading, appointment } = useAppointment()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  if(isLoading){
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  if(!isLoading && !appointment){
    return(
      <div className="pb-5">
        <h1 className="display-4 mb-0">Donation not found</h1>
      </div>
    )
  }

  return (
    <div className="pb-5">
      <h1 className="display-4 mb-1">Donation</h1>
      <Badge className="mb-4" pill variant="danger">
        To: {appointment.type}
      </Badge>{" "}
      <Badge className="mb-4" pill variant="danger">
        {appointment.status}
      </Badge>
      <Row>
        <Col xs="12" md="7">
          <h6 className="mb-3">Appointment Date: {formatDateWithTime(appointment.date)}</h6>
          <Card>
            <Card.Body>
              <h3>Hospital</h3>
              <hr/>
              <h4>{appointment.hospital.name}</h4>
              <h5>{appointment.hospital.address}</h5>
              <h5>{appointment.hospital.lg}, {appointment.hospital.state}</h5>
              <h5>{appointment.hospital.phone}</h5>
              <h6>{appointment.hospital.email}</h6>
            </Card.Body>
          </Card>

          {appointment.beneficiary?(
            <Card className="mt-4">
              <Card.Body>
                <h3>Beneficiary</h3>
                <hr/>
                <h4>{appointment.beneficiary.firstname} {appointment.beneficiary.lastname}</h4>
                <h5>{appointment.beneficiary.address}</h5>
                <h5>{appointment.beneficiary.phone}</h5>
                <h6>{appointment.beneficiary.email}</h6>
              </Card.Body>
            </Card>
          ):null}

        </Col>

        <Col xs="12" md="3" className="mt-4">
          <Card>
            <Card.Body>
              <img src={map} alt="map" className="img-thumbnail"/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Donation

