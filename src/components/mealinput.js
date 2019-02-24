import React from 'react';

export class MealInput extends React.Component {
  render() {
    return(
      <option value={this.props.meal.meal}>{this.props.meal.meal}</option>
    )
  }
}