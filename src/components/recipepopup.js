import React from 'react';
import { Col } from 'react-grid-system';
import {connect} from 'react-redux';
import RecipeCard from './recipecard';
import {StyledPopup, CloseButton, FormButton} from './styledcomponents';

class RecipePopup extends React.Component {
  render() {
    if (this.props.meal === 'Eating out') {
      return(
        <Col key={this.props.k}>
          <span>Going out!</span>
        </Col>
      )
    } else {
      let meal = this.props.meals.find(e => e.meal === this.props.meal);
      const booleans = {
        b: false,
        l: false,
        d: false
      };

      if (meal === undefined) {
        return(
          <Col key={this.props.k}>
            <StyledPopup trigger={<FormButton>{this.props.meal}</FormButton>} modal>
              {close => (
                <div className="modal">
                  <CloseButton className="close" onClick={close}>
                    &times;
                  </CloseButton>
                  <h4>Uh oh!</h4>
                  <p>Meal not found! If you changed the name of one of your meals, please update your plan to reflect these changes. Otherwise we won't be able to serve you properly</p>
                </div>
              )}
            </StyledPopup>
          </Col>
        )
      } else {
        const times = meal.times;

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
            <StyledPopup trigger={<FormButton>{this.props.meal}</FormButton>} modal>
              {close => (
                <div className="modal">
                  <CloseButton className="close" onClick={close}>
                    &times;
                  </CloseButton>
                  <RecipeCard meal={this.props.meal} times={booleans} />
                </div>
              )}
            </StyledPopup>
          </Col>
        )
      }
    }
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(RecipePopup)