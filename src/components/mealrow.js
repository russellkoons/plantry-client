import React from 'react';
import { Row, Col } from 'react-grid-system';
import Popup from 'reactjs-popup';
import {connect} from 'react-redux';

class MealRow extends React.Component {
  render() {
    const meals = [];
    const plan = this.props.plan;
    for (let i = 0; i < plan.mealplans.length; i++) {
      let meal = this.props.meals.find(e => e.meal === plan.mealplans[i].meal);
      if (meal === undefined) {
        meals.push(<Col key={i}>{this.props.plan[i]}</Col>)
      } else {
        let ingredients = [];
        for(let j = 0; j < meal.ingredients.length; j++) {
          ingredients.push(
            <li key={j}>{meal.ingredients[j]}</li>
          )
        }
        meals.push(
          <Col key={i}>
            <Popup trigger={<span>{meal.meal}</span>} modal>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <h3>{meal.meal}</h3>
                  <a href={meal.url}>{meal.url}</a>
                  <h4>Ingredients</h4>
                  <ul>
                    {ingredients}
                  </ul>
                  <p>Notes: {meal.notes}</p>
                </div>
              )}
            </Popup>
          </Col>
        );
      }
    }

    return(
        <Row align="center" style={{ height: '75px' }}>
          <Col>{this.props.time}</Col>
          {meals}
        </Row>
    )
  }
}


const mapStateToProps = state => ({
  plans: state.plantry.plans,
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(MealRow);