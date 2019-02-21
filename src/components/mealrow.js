import React from 'react';
import {Col, Row} from 'react-grid-system';

export class MealRow extends React.Component {
  render() {
    const meals = [];

    return(
        <Row align="center" style={{ height: '75px' }}>
          {meals}
        </Row>
    )
  }
}