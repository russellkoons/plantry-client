import React from 'react';
import RecipePopup from './recipepopup';
import styled from 'styled-components';
import {FieldSet} from './styledcomponents';

// Cards for the Calendar

const Time = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Day = styled(FieldSet)`
  margin-top: 15px;
  max-width: 800px;

  @media only screen and (max-width: 700px) {
    height: auto;
    max-height: 400px;
    width: 350px;
    max-width: 80%;
  }
`;

const Plan = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export class PlanDay extends React.Component {
  render() {
    const plan = this.props.plan;

    return(
      <Day>
        <legend>{this.props.day}</legend>
        <Plan>
          <div>
            <Time>Breakfast</Time>
            <RecipePopup meal={plan[0]} k={this.props.day + 'Breakfast'} />
          </div>
          <div>
            <Time>Lunch</Time>
            <RecipePopup meal={plan[1]} k={this.props.day + 'Lunch'} />
          </div>
          <div>
            <Time>Dinner</Time>
            <RecipePopup meal={plan[2]} k={this.props.day + 'Dinner'} />
          </div>
        </Plan>
      </Day>
    )
  }
}