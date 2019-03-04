import React from 'react';
import { Row, Col } from 'react-grid-system';
import RecipePopup from './recipepopup';

export class DayRow extends React.Component {
  render() {
    const plan = this.props.plan;

    return(
        <Row align="center" style={{ height: '75px' }}>
          <Col>{this.props.day}</Col>
          <RecipePopup meal={plan[0]} k={this.props.time + 0} />
          <RecipePopup meal={plan[1]} k={this.props.time + 1} />
          <RecipePopup meal={plan[2]} k={this.props.time + 2} />
        </Row>
    )
  }
}