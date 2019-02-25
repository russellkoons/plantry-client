import React from 'react';
import {connect} from 'react-redux';
import {MealInput} from './mealinput';
import $ from 'jquery';
import {Field} from 'formik';
import {connect as formikConnect} from 'formik';
import {openSesame} from '../actions/protected';

export class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
  }

  openModal (id) {
    const val = $(`#${id}`).val()    
    this.props.formik.setFieldValue(id, val)
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

    const values = this.props.formik.values;

    const day = this.props.day
    let ids = [day + 'Breakfast', day + 'Lunch', day + 'Dinner']

    return(
      <fieldset>
        <legend>{day}</legend>
        <label htmlFor="breakfast">Breakfast: </label>
        <Field component="select" name={ids[0]} id={ids[0]} value={values[ids[0]]} defaultValue="choose" onChange={() => this.openModal(ids[0])}>
          <option disabled value="choose">--Choose a meal--</option>
          {breakfast}
          <option value="new">New Meal</option>
        </Field>
        <label htmlFor="lunch"> Lunch: </label>
        <Field component="select" name={ids[1]} id={ids[1]} value={values[ids[1]]} defaultValue="choose" onChange={() => this.openModal(ids[1])}>
          <option disabled value="choose">--Choose a meal--</option>
          {lunch}
          <option value="new">New Meal</option>
        </Field>
        <label htmlFor="dinner"> Dinner: </label>
        <Field component="select" name={ids[2]} id={ids[2]} value={values[ids[2]]} defaultValue="choose" onChange={() => this.openModal(ids[2])}>
          <option disabled value="choose">--Choose a meal--</option>
          {dinner}
          <option value="new">New Meal</option>
        </Field>
      </fieldset>
    )
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals
});

const DC = connect(mapStateToProps)(DayCard);

export default formikConnect(DC);