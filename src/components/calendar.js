import React from 'react';
import {Container, Col, Row} from 'react-grid-system';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {Formik, Form} from 'formik';
import {FormButton, CloseButton, StyledPopup} from './styledcomponents';
import {CalendarRow} from './calendarrow';
import {MealRow} from './mealrow';
import {DayRow} from './dayrow';
import DayCard from './daycard';
import MealForm from './mealform';
import {updatePlan, fetchPlans} from '../actions/protected'

// Gotta style the calendar!!!! You're SO CLOSE AHHHHH
// Reformat small screen layout. It just doesn't work with long meal names

const style = {
  background: 'grey'
};

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

  cancel = () => {
    this.setState({
      editing: false
    });
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];
    const s = [];
    const m = [];
    const t = [];
    const w = [];
    const r = [];
    const f = [];
    const a = [];
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

    for (let i = 0; i < plan.mealplans.length; i++) {
      if (plan.mealplans[i].day === 'Sunday') {
        s.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].day === 'Monday') {
        m.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].day === 'Tuesday') {
        t.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].day === 'Wednesday') {
        w.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].day === 'Thursday') {
        r.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].day === 'Friday') {
        f.push(plan.mealplans[i].meal)
      } else if (plan.mealplans[i].day === 'Saturday') {
        a.push(plan.mealplans[i].meal)
      }
    }

    if (!this.state.editing) {
      return(
        <div>
          <Container className="wide" style={style}>
            <CalendarRow />
            <MealRow time="Breakfast" plan={breakfast} />
            <MealRow time="Lunch" plan={lunch} />
            <MealRow time="Dinner" plan={dinner} />
          </Container>
          <Container className="narrow">
            <Row>
              <Col>Day</Col>
              <Col>Breakfast</Col>
              <Col>Lunch</Col>
              <Col>Dinner</Col>
            </Row>
            <DayRow day="Sun" plan={s} />
            <DayRow day="Mon" plan={m} />
            <DayRow day="Tue" plan={t} />
            <DayRow day="Wed" plan={w} />
            <DayRow day="Thu" plan={r} />
            <DayRow day="Fri" plan={f} />
            <DayRow day="Sat" plan={a} />
          </Container>
          <FormButton onClick={this.editPlan}>Edit</FormButton>
          <FormButton onClick={() => this.props.onDelete(plan.id)}>Delete</FormButton>
        </div>
      )
    } else {
      return(
        <div>
          <StyledPopup trigger={<FormButton>Add a new meal</FormButton>} 
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
          </StyledPopup>
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
                <FormButton type="submit" disabled={isSubmitting}>Submit</FormButton>
              </Form>
            )} 
          />
          <FormButton onClick={this.cancel}>Cancel</FormButton>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  open: state.plantry.open,
  plans: state.plantry.plans
});

export default connect(mapStateToProps, { fetchPlans, updatePlan, push })(Calendar)