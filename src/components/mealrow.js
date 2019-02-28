import React from 'react';
import { Row, Col } from 'react-grid-system';
import RecipePopup from './recipepopup';

export class MealRow extends React.Component {
  render() {
    const plan = this.props.plan;

    return(
        <Row align="center" style={{ height: '75px' }}>
          <Col>{this.props.time}</Col>
          <RecipePopup meal={plan[0]} k={this.props.time + 0} />
          <RecipePopup meal={plan[1]} k={this.props.time + 1} />
          <RecipePopup meal={plan[2]} k={this.props.time + 2} />
          <RecipePopup meal={plan[3]} k={this.props.time + 3} />
          <RecipePopup meal={plan[4]} k={this.props.time + 4} />
          <RecipePopup meal={plan[5]} k={this.props.time + 5} />
          <RecipePopup meal={plan[6]} k={this.props.time + 6} />
        </Row>
    )
  }
}