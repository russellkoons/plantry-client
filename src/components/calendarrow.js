import React from 'react';
import { Row, Col } from 'react-grid-system';

export class CalendarRow extends React.Component {
  render() {
    return (
      <Row align="center" style={{ height: '50px' }}>
        <Col>Meals</Col>
        <Col>Sunday</Col>
        <Col>Monday</Col>
        <Col>Tuesday</Col>
        <Col>Wednesday</Col>
        <Col>Thursday</Col>
        <Col>Friday</Col>
        <Col>Saturday</Col>
      </Row>
    )
  }
}