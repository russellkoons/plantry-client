import React from 'react';
import { Container } from 'react-grid-system';
import {CalendarRow} from './calendarrow';
import {MealRow} from './mealrow';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  editPlan = () => {
    this.setState({editing: true})
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];
    const plan = this.props.plan;

    for (let i = 0; i < plan.mealplans.length; i++) {
      if (plan.mealplans[i].time === 'Breakfast') {
        breakfast.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].time === 'Lunch') {
        lunch.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].time === 'Dinner') {
        dinner.push(plan.mealplans[i].meal)
      }
    }

    if (!this.state.editing) {
      return(
        <div>
          <Container className="container">
            <CalendarRow />
            <MealRow time="Breakfast" plan={breakfast} />
            <MealRow time="Lunch" plan={lunch} />
            <MealRow time="Dinner" plan={dinner} />
          </Container>
          <button onClick={this.editPlan}>Edit</button>
        </div>
      )
    } else {
      return(
        <div>
          <p>Hello World!</p>
        </div>
      )
    }
  }
}