import React, { useState } from 'react'
import { Card, Col, Row, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Requests = () => {

  const [requests] = useState([]);
  const [myRequests] = useState([]);

  return (
    <div>
      <h1 className="display-4 mb-4">Requests</h1>
      <Row>
        <Col xs="12" md="6">
          <Card style={{minHeight: '400px'}}>
            <Card.Body>
              <Button className="mb-4" as={Link} to="/appointments/book" variant="danger">Donate to Bank</Button>
              <h6 className="mb-3">Donate to Requests</h6>
              <Table striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Hospital</th>
                    <th>Phone</th>
                    <th width="50"></th>
                  </tr>
                </thead>
                <tbody>
                  {requests && requests.length > 0 ?(
                    requests.map(request => (
                      <tr>
                        <td>1</td>
                        <td>Seyi Oderinde</td>
                        <td>Eko Hospital, Ikeja</td>
                        <td>+234 802 283 5496</td>
                        <td><Button className="" variant="danger">View</Button></td>
                      </tr>
                    ))
                  ):(
                    <tr>
                      <td className="text-center" colSpan="5">No request matching your blood group</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" md="6">
          <Card style={{minHeight: '400px'}}>
            <Card.Body>
              <Button className="mb-4" as={Link} to="/appointments/request" variant="danger">Make a Request</Button>
              <h6 className="mb-3">Your Requests</h6>
              <Table striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Hospital</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th width="50"></th>
                  </tr>
                </thead>
                <tbody>
                  {myRequests && myRequests.length > 0 ?(
                    myRequests.map(request => (
                      <tr>
                        <td>1</td>
                        <td>Eko Hospital, Ikeja</td>
                        <td>+234 802 283 5496</td>
                        <td>Open</td>
                        <td><Button className="" variant="danger">View</Button></td>
                      </tr>
                    ))
                  ):(
                    <tr>
                      <td className="text-center" colSpan="5">You don't have a request</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Requests;

