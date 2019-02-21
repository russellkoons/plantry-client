import React from 'react';
import { Container, Col, Row } from 'react-grid-system';
import {CalendarRow} from './calendarrow';
import {MealRow} from './mealrow';

export class Calendar extends React.Component {
  render() {
    return(
      <div>
        <h2>Meal Plan</h2>
        <Container className="container">
          <CalendarRow />
          <MealRow />
          <MealRow />
          <MealRow />
        </Container>
        <button>Edit</button>
      </div>
    )
  }
}