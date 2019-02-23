import React from 'react';
// import {connect} from 'react-redux';
import {DayCard} from './daycard';
import Popup from 'reactjs-popup';
import MealForm from './mealform'

export class MealPlan extends React.Component {
  closeModal() {
    this.setState({ 
      open: false
    })
  }
  
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
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <button className="close" onClick={this.closeModal}>
              &times;
            </button>
            <MealForm />
          </div>
        </Popup>
      </div>
    )
  }
}