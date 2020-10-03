import React from 'react'
import { Card, Col, Row, Table, Button, Spinner, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useMyRequests from '../../hooks/useMyRequests';
import { formatDateWithTime, status } from '../../utils/helpers';

const Requests = () => {

  const { isLoading, myRequests } = useMyRequests();

  return (
    <div>
      <h1 className="display-4 mb-4">Requests</h1>
      <Row>
        <Col xs="12" md="12">
          <Card style={{minHeight: '400px'}}>
            <Card.Body>
              <Button className="mb-4" as={Link} to="/requests/book" variant="danger">Make a Request</Button>
              <h6 className="mb-3">Your Requests</h6>
              <Table striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Hospital</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Phone</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th width="50"></th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading?(
                    <tr>
                      <td colSpan="8" className="text-center">
                        <Spinner animation="border" role="status">
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      </td>
                    </tr>
                  ):(
                  <>
                  {myRequests && myRequests.length > 0 ?(
                    myRequests.map((request, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{formatDateWithTime(request.createdAt)}</td>
                        <td>{request.hospital.name}</td>
                        <td>{request.hospital.state}</td>
                        <td>{request.hospital.lg}</td>
                        <td>{request.hospital.phone}</td>
                        <td><ProgressBar className="mt-1" variant="danger" now={request.progress} label={`${request.progress}%`} /></td>
                        <td>{status(request.status)}</td>
                        <td><Button size="sm" as={Link} to={`/requests/${request.id}`} variant="danger">More</Button></td>
                      </tr>
                    ))
                  ):(
                    <tr>
                      <td className="text-center" colSpan="9">You don't have a request</td>
                    </tr>
                  )}
                  </>
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

