import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import {MealInput} from './mealinput';
import {Field, ErrorMessage} from 'formik';
import {connect as formikConnect} from 'formik';
import '../index.css';
import {FieldSet, PlanDiv, Error} from './styledcomponents';

export class DayCard extends React.Component {
  setFieldValue = id => {
    const val = $(`#${id}`).val();
    this.props.formik.setFieldValue(id, val);
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
      <FieldSet>
        <legend>{day}</legend>
        <PlanDiv>
          <label htmlFor="breakfast">Breakfast: </label>
          <Field component="select" name={ids[0]} id={ids[0]} value={values[ids[0]]} onChange={() => this.setFieldValue(ids[0])}>
            <option disabled value="">--Choose a meal--</option>
            {breakfast}
            <option value="Eating out">Going out!</option>
          </Field>
          <ErrorMessage name={ids[0]} component={Error} />
        </PlanDiv>
        <PlanDiv>
          <label htmlFor="lunch"> Lunch: </label>
          <Field component="select" name={ids[1]} id={ids[1]} value={values[ids[1]]} onChange={() => this.setFieldValue(ids[1])}>
            <option disabled value="">--Choose a meal--</option>
            {lunch}
            <option value="Eating out">Going out!</option>
          </Field>
          <ErrorMessage name={ids[1]} component={Error} />
        </PlanDiv>
        <PlanDiv>
          <label htmlFor="dinner"> Dinner: </label>
          <Field component="select" name={ids[2]} id={ids[2]} value={values[ids[2]]} onChange={() => this.setFieldValue(ids[2])}>
            <option disabled value="">--Choose a meal--</option>
            {dinner}
            <option value="Eating out">Going out!</option>
          </Field>
          <ErrorMessage name={ids[2]} component={Error} />
        </PlanDiv>
      </FieldSet>
    )
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals
});

const DC = connect(mapStateToProps)(DayCard);

export default formikConnect(DC);