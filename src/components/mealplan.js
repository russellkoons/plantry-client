import React from 'react';
import DayCard from './daycard';
import Popup from 'reactjs-popup';
import {connect} from 'react-redux';
import MealForm from './mealform';
import { closeSesame } from '../actions/protected';

class MealPlan extends React.Component {
  render() {
    return(
      <div>
        <h2>New Meal Plan</h2>
        <input type="date" name="date" /><br/>
        <DayCard day="Sunday" />
        <DayCard day="Monday" />
        <DayCard day="Tuesday" />
        <DayCard day="Wednesday" />
        <DayCard day="Thursday" />
        <DayCard day="Friday" />
        <DayCard day="Saturday" />
        <input type="submit" />
        <Popup
          open={this.props.open}
          close={!this.props.open}
          closeOnDocumentClick
        >
          <div className="modal">
            <button className="close" onClick={this.props.closeSesame}>
              &times;
            </button>
            <MealForm />
          </div>
        </Popup>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  open: state.plantry.open
});

export default connect(mapStateToProps, { closeSesame })(MealPlan);