import React from 'react';
import { Col } from 'react-grid-system';
import {connect} from 'react-redux';
import Popup from 'reactjs-popup';
import RecipeCard from './recipecard';

class RecipePopup extends React.Component {
  render() {
    let meal = this.props.meals.find(e => e.meal === this.props.meal);
    const times = meal.times;
    const booleans = {
      b: false,
      l: false,
      d: false
    };

    for (let i = 0; i < times.length; i++) {
      let time = times[i].time;
      if (time === 'Breakfast') {
        booleans.b = true;
      } else if (time === 'Lunch') {
        booleans.l = true;
      } else if (time === 'Dinner') {
        booleans.d = true;
      }
    }

    return(
      <Col key={this.props.k}>
        <Popup trigger={<span>{this.props.meal}</span>} modal>
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <RecipeCard meal={this.props.meal} times={booleans} />
            </div>
          )}
        </Popup>
      </Col>
    )
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(RecipePopup)