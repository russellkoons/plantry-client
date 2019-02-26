import React from 'react';
import DayCard from './daycard';
import Popup from 'reactjs-popup';
import moment from 'moment';
import {Formik, Form} from 'formik';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import MealForm from './mealform';
import { closeSesame, addPlan } from '../actions/protected';

class MealPlan extends React.Component {
  handleSubmit = (values, {
    setSubmitting
  }) => {
    const plan = {
      date: moment().format('MMMM Do YYYY'),
      mealplans: [
        {
          meal: values.SundayBreakfast,
          time: 'Breakfast',
          day: 'Sunday'
        }, {
          meal: values.SundayLunch,
          time: 'Lunch',
          day: 'Sunday'
        }, {
          meal: values.SundayDinner,
          time: 'Dinner',
          day: 'Sunday'
        }, {
          meal: values.MondayBreakfast,
          time: 'Breakfast',
          day: 'Monday'
        }, {
          meal: values.MondayLunch,
          time: 'Lunch',
          day: 'Monday'
        }, {
          meal: values.MondayDinner,
          time: 'Dinner',
          day: 'Monday'
        }, {
          meal: values.TuesdayBreakfast,
          time: 'Breakfast',
          day: 'Tuesday'
        }, {
          meal: values.TuesdayLunch,
          time: 'Lunch',
          day: 'Tuesday'
        }, {
          meal: values.TuesdayDinner,
          time: 'Dinner',
          day: 'Tuesday'
        }, {
          meal: values.WednesdayBreakfast,
          time: 'Breakfast',
          day: 'Wednesday'
        }, {
          meal: values.WednesdayLunch,
          time: 'Lunch',
          day: 'Wednesday'
        }, {
          meal: values.WednesdayDinner,
          time: 'Dinner',
          day: 'Wednesday'
        }, {
          meal: values.ThursdayBreakfast,
          time: 'Breakfast',
          day: 'Thursday'
        }, {
          meal: values.ThursdayLunch,
          time: 'Lunch',
          day: 'Thursday'
        }, {
          meal: values.ThursdayDinner,
          time: 'Dinner',
          day: 'Thursday'
        }, {
          meal: values.FridayBreakfast,
          time: 'Breakfast',
          day: 'Friday'
        }, {
          meal: values.FridayLunch,
          time: 'Lunch',
          day: 'Friday'
        }, {
          meal: values.FridayDinner,
          time: 'Dinner',
          day: 'Friday'
        }, {
          meal: values.SaturdayBreakfast,
          time: 'Breakfast',
          day: 'Saturday'
        }, {
          meal: values.SaturdayLunch,
          time: 'Lunch',
          day: 'Saturday'
        }, {
          meal: values.SaturdayDinner,
          time: 'Dinner',
          day: 'Saturday'
        }
      ]
    };
    this.props.addPlan(plan)
      .then(() => setSubmitting(false))
      .then(() => this.props.history.push('/plans'));
    return;
  }

  render() {
    return(
      <div>
        <h2>New Meal Plan</h2>
        <Formik 
          onSubmit={this.handleSubmit}
          render={({
            isSubmitting
          }) => (
            <Form>
              <DayCard day="Sunday" />
              <DayCard day="Monday" />
              <DayCard day="Tuesday" />
              <DayCard day="Wednesday" />
              <DayCard day="Thursday" />
              <DayCard day="Friday" />
              <DayCard day="Saturday" />
              <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
          )} 
        />
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

export default connect(mapStateToProps, { closeSesame, addPlan, push })(MealPlan);