import React from 'react';
import {connect} from 'react-redux';
import {DayCard} from './daycard';

export class MealPlan extends React.Component {
  render() {
    return(
      <div>
        <h2>New Meal Plan</h2>
        <input type="date" name="date" /><br/>
        <DayCard day="Sunday" />
        <DayCard day="Monday" />
        <DayCard day="Tuesday" />
        <DayCard day="Wednesday" />
        <DayCard day="Thursday" />
        <DayCard day="Friday" />
        <DayCard day="Saturday" />
        <input type="submit" />
      </div>
    )
  }
}