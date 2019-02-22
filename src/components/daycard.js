import React from 'react';
// import {connect} from 'react-redux';
import Popup from 'reactjs-popup';
import {MealForm} from './mealform';
// import {MealInput} from './mealinput';
import $ from 'jquery';

export class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal (id) {
    const val = $(`#${id}`).val()
    if (val === 'new') {
      this.setState({ 
        open: true
      });
    }
  }

  closeModal() {
    this.setState({ 
      open: false
    })
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];

    const day = this.props.day
    let meals = [day + 'b', day + 'l', day + 'd']

    return(
      <fieldset>
        <legend>{this.props.day.name}</legend>
        <label htmlFor="breakfast">Breakfast: </label>
        <select id={meals[0]} defaultValue="choose" onChange={() => this.openModal(meals[0])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {breakfast}
        </select>
        <label htmlFor="lunch"> Lunch: </label>
        <select id={meals[1]} defaultValue="choose" onChange={() => this.openModal(meals[1])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {lunch}
        </select>
        <label htmlFor="dinner"> Dinner: </label>
        <select id={meals[2]} defaultValue="choose" onChange={() => this.openModal(meals[2])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {dinner}
        </select>
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
      </fieldset>
    )
  }
}