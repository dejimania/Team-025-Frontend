import React, { useEffect } from 'react';
import { Card, Table, ProgressBar, Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAppointments from '../hooks/useAppointments';
import { formatDateWithTime } from '../utils/helpers';

function AppointmentHistory() {

  const { isLoading, appointments } = useAppointments();

  useEffect(() => {
  }, [])

  return (
    <div>
      <Card>
        <Card.Body>
          <Button variant="danger" as={Link} to="/requests" className="mb-3">
            Donate
          </Button>
          <h6 className="mb-3">Appointment History</h6>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>For</th>
                <th>Status</th>
                <th>Hospital</th>
                <th className="d-none d-md-table-cell">Progress</th>
                <th className="d-none d-md-table-cell">Phone</th>
                <th></th>
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
                  {appointments && appointments.length > 0?(
                    <>
                      {appointments.map((appointment, index) => (
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{formatDateWithTime(appointment.date)}</td>
                          <td className="text-capitalize">{appointment.type}</td>
                          <td className="text-capitalize">{appointment.status}</td>
                          <td>{appointment.hospital.name}</td>
                          <td className="d-none d-md-table-cell"><ProgressBar variant="info" now={appointment.progress} label={appointment.progress} /></td>
                          <td className="d-none d-md-table-cell">{appointment.hospital.phone}</td>
                          <td width="50"><Button className="" as={Link} to={`/appointments/${appointment._id}`} variant="danger">View</Button></td>
                        </tr>
                      ))}
                    </>
                  ):(
                    <tr>
                      <td colSpan="5">No Appointment</td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AppointmentHistory

