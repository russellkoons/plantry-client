import React from 'react';

// Component to fill out MealPlan dropdown selects

export class MealInput extends React.Component {
  render() {
    return(
      <option value={this.props.meal.meal}>{this.props.meal.meal}</option>
    )
  }
}