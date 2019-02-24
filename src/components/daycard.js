import React from 'react';
import {connect} from 'react-redux';
import {MealInput} from './mealinput';
import $ from 'jquery';
import {openSesame} from '../actions/protected';

export class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
  }

  openModal (id) {
    const val = $(`#${id}`).val()
    if (val === 'new') {
      this.props.dispatch(openSesame());
    }
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];

    const meals = this.props.meals;

    for (let i = 0; i < meals.length; i++) {
      const times = meals[i].times;
      for (let j = 0; j < times.length; j++) {
        if (times[j].time === 'Breakfast') {
          breakfast.push(
            <MealInput meal={meals[i]} key={'breakfast' + i} />
          )
        } else if (times[j].time === 'Lunch') {
          lunch.push(
            <MealInput meal={meals[i]} key={'lunch' + i} />
          )
        } else if (times[j].time === 'Dinner') {
          dinner.push(
            <MealInput meal={meals[i]} key={'dinner' + i} />
          )
        }
      }
    }

    const day = this.props.day
    let ids = [day + 'breakfast', day + 'lunch', day + 'dinner']

    return(
      <fieldset>
        <legend>{day}</legend>
        <label htmlFor="breakfast">Breakfast: </label>
        <select id={ids[0]} defaultValue="choose" onChange={() => this.openModal(ids[0])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {breakfast}
        </select>
        <label htmlFor="lunch"> Lunch: </label>
        <select id={ids[1]} defaultValue="choose" onChange={() => this.openModal(ids[1])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {lunch}
        </select>
        <label htmlFor="dinner"> Dinner: </label>
        <select id={ids[2]} defaultValue="choose" onChange={() => this.openModal(ids[2])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {dinner}
        </select>
      </fieldset>
    )
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(DayCard);