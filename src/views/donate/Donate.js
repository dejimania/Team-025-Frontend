import React from "react";
import { Button, Card, Col, Row, Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useRequests from "../../hooks/useRequests";

const Donate = () => {

  const { isLoading, requests } = useRequests();

  return (
    <div>
      <h1 className="display-4 mb-4">Donate</h1>
      <Row>
        <Col xs="12" md="12">
          <Card style={{ minHeight: "400px" }}>
            <Card.Body>
              <Button className="mb-4" as={Link} to="/donation/book" variant="danger">
                Donate to Bank
              </Button>
              <h6 className="mb-3">Donate to Users</h6>
              <Table striped hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Blood Group</th>
                    <th>Hospital</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Phone</th>
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
                  {requests && requests.length > 0 ? (
                    requests.map((request, index) => (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{request.bloodReceiverId.firstname} {request.bloodReceiverId.lastname}</td>
                        <td className="text-danger">{request.bloodGroup}</td>
                        <td>{request.hospital.name}</td>
                        <td>{request.hospital.state}</td>
                        <td>{request.hospital.lg}</td>
                        <td>{request.hospital.phone}</td>
                        <td>
                          <Button as={Link} to={`/requests/accept/${request.id}`} size="sm" variant="danger">
                            Donate
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="text-center" colSpan="8">
                        No request matching your blood group
                      </td>
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
  );
};

export default Donate;
