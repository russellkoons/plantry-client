import React from 'react';
import {connect} from 'react-redux';

export class MealInput extends React.Component {
  render() {
    return(
      <option value={this.props.meal.name}>{this.props.meal.name}</option>
    )
  }
}