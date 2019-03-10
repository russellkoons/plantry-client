import React from 'react';
import DayCard from './daycard';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {FormButton, Container, Error, MealPopup, CloseButton} from './styledcomponents';
import MealForm from './mealform';
import {addPlan} from '../actions/protected';
import {PlanSchema} from '../schemas';

class MealPlan extends React.Component {
  handleSubmit = (values, {
    setSubmitting
  }) => {
    const plan = {
      date: values.name,
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
    let e;

    if (this.props.error) {
      e = <Error>{this.props.error}</Error>
    }

    return(
      <Container>
        <h2>New Meal Plan</h2>
        <p>Click Add New Meal or add your favorite meals</p>
        <p>Use the meals you make to build your weekly meal plan</p>
        <MealPopup trigger={<FormButton>Add a new meal</FormButton>} 
          modal
          closeOnDocumentClick
        >
          {close => (
            <div className="modal">
              <CloseButton className="close" onClick={close}>
                &times;
              </CloseButton>
              <MealForm />
            </div>
          )}
        </MealPopup>
        <Formik 
          initialValues={{
            name: '',
            SundayBreakfast: '',
            SundayLunch: '',
            SundayDinner: '',
            MondayBreakfast: '',
            MondayLunch: '',
            MondayDinner: '',
            TuesdayBreakfast: '',
            TuesdayLunch: '',
            TuesdayDinner: '',
            WednesdayBreakfast: '',
            WednesdayLunch: '',
            WednesdayDinner: '',
            ThursdayBreakfast: '',
            ThursdayLunch: '',
            ThursdayDinner: '',
            FridayBreakfast: '',
            FridayLunch: '',
            FridayDinner: '',
            SaturdayBreakfast: '',
            SaturdayLunch: '',
            SaturdayDinner: ''
          }}
          validationSchema={PlanSchema}
          onSubmit={this.handleSubmit}
          render={({
            isSubmitting
          }) => (
            <Form>
              <label>Name your plan: </label>
              <Field name="name" type="text" />
              <ErrorMessage component={Error} name="name" />
              <DayCard day="Sunday" />
              <DayCard day="Monday" />
              <DayCard day="Tuesday" />
              <DayCard day="Wednesday" />
              <DayCard day="Thursday" />
              <DayCard day="Friday" />
              <DayCard day="Saturday" />
              <FormButton type="submit" disabled={isSubmitting}>Save Meal Plan</FormButton>
            </Form>
          )} 
        />
        {e}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
});

export default connect(mapStateToProps, { addPlan, push })(MealPlan);