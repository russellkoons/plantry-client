import React from 'react';
import { Container } from 'react-grid-system';
import {CalendarRow} from './calendarrow';
import MealRow from './mealrow';

export default class Calendar extends React.Component {
  render() {
    return(
      <div>
        <Container className="container">
          <CalendarRow />
          <MealRow time="Breakfast" plan={this.props.plan} />
          <MealRow time="Lunch" plan={this.props.plan} />
          <MealRow time="Dinner" plan={this.props.plan} />
        </Container>
        <button>Edit</button>
      </div>
    )
  }
}