import React from 'react';
import {Container} from 'react-grid-system';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {Formik, Form} from 'formik';
import Popup from 'reactjs-popup';
import {CalendarRow} from './calendarrow';
import {MealRow} from './mealrow';
import DayCard from './daycard';
import MealForm from './mealform';
import {deletePlan, closeSesame, updatePlan, fetchPlans} from '../actions/protected'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  editPlan = () => {
    this.setState({editing: true})
  }

  handleUpdate = (values, {
    setSubmitting
  }) => {
    const id = this.props.plan.id
    const planUpdate = {
      id: id,
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

    this.props.updatePlan(id, planUpdate)
      .then(() => {
        setSubmitting(false);
        this.props.fetchPlans();
        this.forceUpdate();
        this.setState({editing: false});
      });
    return;
  }

  delete = () => {
    const id = this.props.plan.id;
    this.props.deletePlan(id)
      .then(() => {
        this.props.history.push('/plans');
      })
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];
    const plan = this.props.plans.find(e => e.id === this.props.plan);

    for (let i = 0; i < plan.mealplans.length; i++) {
      if (plan.mealplans[i].time === 'Breakfast') {
        breakfast.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].time === 'Lunch') {
        lunch.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].time === 'Dinner') {
        dinner.push(plan.mealplans[i].meal)
      }
    }

    if (!this.state.editing) {
      return(
        <div>
          <Container className="container">
            <CalendarRow />
            <MealRow time="Breakfast" plan={breakfast} />
            <MealRow time="Lunch" plan={lunch} />
            <MealRow time="Dinner" plan={dinner} />
          </Container>
          <button onClick={this.editPlan}>Edit</button>
          <button onClick={this.delete}>Delete</button>
        </div>
      )
    } else {
      return(
        <div>
          <Formik
            initialValues={{
              SundayBreakfast: breakfast[0],
              SundayLunch: lunch[0],
              SundayDinner: dinner[0],
              MondayBreakfast: breakfast[1],
              MondayLunch: lunch[1],
              MondayDinner: dinner[1],
              TuesdayBreakfast: breakfast[2],
              TuesdayLunch: lunch[2],
              TuesdayDinner: dinner[2],
              WednesdayBreakfast: breakfast[3],
              WednesdayLunch: lunch[3],
              WednesdayDinner: dinner[3],
              ThursdayBreakfast: breakfast[4],
              ThursdayLunch: lunch[4],
              ThursdayDinner: dinner[4],
              FridayBreakfast: breakfast[5],
              FridayLunch: lunch[5],
              FridayDinner: dinner[5],
              SaturdayBreakfast: breakfast[6],
              SaturdayLunch: lunch[6],
              SaturdayDinner: dinner[6]
            }}
            onSubmit={this.handleUpdate}
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
}

const mapStateToProps = state => ({
  open: state.plantry.open,
  plans: state.plantry.plans
});

export default connect(mapStateToProps, { fetchPlans, deletePlan, updatePlan, closeSesame, push })(Calendar)