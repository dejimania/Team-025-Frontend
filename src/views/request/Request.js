import React, { useEffect } from 'react';
import { Card, Col, Row, Spinner, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import map from '../../assets/images/staticmap.png'
import useRequest from '../../hooks/useRequest';

const Request = () => {

  const { isLoading, request } = useRequest()

  const { user } = useSelector(state => state.auth);

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

  if(!isLoading && !request){
    return(
      <div className="pb-5">
        <h1 className="display-4 mb-0">Request not found</h1>
      </div>
    )
  }

  return (
    <div className="pb-5">
      <h1 className="display-4 mb-0">Request</h1>
      <Badge className="mb-4" pill variant="primary">
        {request.status}
      </Badge>
      <Row>
        <Col xs="12" md="7">
          <Row>
            <Col xs="12" md="12">
              <Card>
                <Card.Body>
                  <Badge pill variant="danger">
                    Hospital
                  </Badge>
                  <h6>{request.hospital.name}</h6>
                  <p className="mb-0">{request.hospital.address}</p>
                  <p className="mb-0">{request.hospital.lg}, {request.hospital.state}</p>
                  <p className="mb-0">{request.hospital.phone}</p>
                  <p className="mb-0">{request.hospital.email}</p>
                </Card.Body>
              </Card>
            </Col>

            {user._id !== request.bloodReceiverId._id?(
              <Col xs="12" md="12" className="mt-4 mb-4">
                <Card>
                  <Card.Body>
                    <Badge pill variant="danger">
                      Beneficiary
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      {request.bloodGroup}
                    </Badge>
                    <h6>{request.bloodReceiverId.firstname} {request.bloodReceiverId.lastname}</h6>
                    <p className="mb-0"></p>
                    <p className="mb-0">{request.bloodReceiverId.lg}, {request.hospital.state}</p>
                    <p className="mb-0">{request.bloodReceiverId.phone}</p>
                    <p className="mb-0">{request.bloodReceiverId.email}</p>
                  </Card.Body>
                </Card>
              </Col>
            ):null}

            {request.bloodOwnerId && user._id !== request.bloodOwnerId._id?(
              <Col xs="12" md="12" className="mt-4 mb-4">
                <Card>
                  <Card.Body>
                    <Badge pill variant="danger">
                      Donor
                    </Badge>{" "}
                    <Badge pill variant="danger">
                      {request.bloodGroup}
                    </Badge>
                    <h6>{request.bloodOwnerId.firstname} {request.bloodOwnerId.lastname}</h6>
                    <p className="mb-0"></p>
                    <p className="mb-0">{request.bloodOwnerId.lg}, {request.bloodOwnerId.state}</p>
                    <p className="mb-0">{request.bloodOwnerId.phone}</p>
                    <p className="mb-0">{request.bloodOwnerId.email}</p>
                  </Card.Body>
                </Card>
              </Col>
            ):null}

          </Row>
        </Col>
        <Col xs="12" md="3">
          <img src={map} alt="map" className="img-thumbnail"/>
        </Col>
      </Row>
    </div>
  )
}

export default Request

