import React from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';

function AppointmentHistory() {
  return (
    <div>
      <Card>
        <Card.Body>
          <h6 className="mb-3">Appointment History</h6>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Hospital</th>
                <th>Progress</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>July 20th, 2020</td>
                <td>Eko Hospital, Ikeja</td>
                <td><ProgressBar variant="info" now={66} label='66%' /></td>
                <td>+234 802 283 5496</td>
              </tr>
              <tr>
                <td>2</td>
                <td>August 21th, 2020</td>
                <td>Eko Hospital, Ikeja</td>
                <td><ProgressBar variant="success" now={100} label='100%' /></td>
                <td>+234 802 283 5496</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Sept 20th, 2020</td>
                <td>Eko Hospital, Ikeja</td>
                <td><ProgressBar variant="success" now={100} label='100%' /></td>
                <td>+234 802 283 5496</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AppointmentHistory

