import React from 'react';
import RecipePopup from './recipepopup';
import styled from 'styled-components';
import {FieldSet} from './styledcomponents';

const Time = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Day = styled(FieldSet)`
  max-width: 150px;
  height: 340px;
  margin-top: 15px;

  @media only screen and (max-width: 1260px) {
    height: auto;
    max-height: 400px;
    width: 350px;
    max-width: 80%;
  }
`;

export class PlanDay extends React.Component {
  render() {
    const plan = this.props.plan;

    return(
      <Day>
        <legend>{this.props.day}</legend>
        <Time>Breakfast</Time>
        <RecipePopup meal={plan[0]} k={this.props.day + 'Breakfast'} />
        <Time>Lunch</Time>
        <RecipePopup meal={plan[1]} k={this.props.day + 'Lunch'} />
        <Time>Dinner</Time>
        <RecipePopup meal={plan[2]} k={this.props.day + 'Dinner'} />
      </Day>
    )
  }
}