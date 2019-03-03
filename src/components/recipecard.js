import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form, FieldArray, ErrorMessage} from 'formik';
import {updateMeal, fetchMeals} from '../actions/protected';

class RecipeCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      breakfast: this.props.times.b,
      lunch: this.props.times.l,
      dinner: this.props.times.d
    }
  }
  
  editMeal = () => {
    this.setState({editing: true});
  }

  submitEdit = (values, {
    setSubmitting 
  }) => {
    let meal = this.props.meals.find(e => e.meal === this.props.meal);
    const id = meal.id;
    const mealEdit = {
      id: id,
      meal: values.name,
      ingredients: [],
      times: [],
      url: values.url,
      notes: values.notes
    };

    for (let i = 0; i < values.ingredients.length; i++) {
      mealEdit.ingredients.push({
        ingredient: values.ingredients[i]
      });
    };

    if (this.state.breakfast) {
      mealEdit.times.push({time: 'Breakfast'});
    }
    if (this.state.lunch) {
      mealEdit.times.push({time: 'Lunch'});
    }
    if (this.state.dinner) {
      mealEdit.times.push({time: 'Dinner'})
    }

    this.props.dispatch(updateMeal(id, mealEdit))
      .then(() => {
        setSubmitting(false);
        this.props.dispatch(fetchMeals());
        this.forceUpdate();
        this.setState({editing: false});
      });
    return;
  }

  handleChange = key => {
    if (this.state[key]) {
      this.setState({[key]: false})
    } else {
      this.setState({[key]: true})
    }
  }

  cancel = () => {
    this.setState({
      editing: false
    });
  }

  render() {
    let meal = this.props.meals.find(e => e.meal === this.props.meal);
    let ingredients = [];
    let ingredientValues = [];
    let times = [];

    for(let i = 0; i < meal.ingredients.length; i++) {
      ingredients.push(
        <li key={i}>{meal.ingredients[i].ingredient}</li>
      )
      ingredientValues.push(meal.ingredients[i].ingredient)
    }

    for (let i = 0; i < meal.times.length; i++) {
      let time = meal.times[i].time;
      times.push(
        <li key={i}>{time}</li>
      )
    }

    if (!this.state.editing) {
      return(
        <div>
          <h3>{meal.meal}</h3>
          <a href={meal.url}>{meal.url}</a>
          <h4>Ingredients</h4>
          <ul>
            {ingredients}
          </ul>
          <p>Notes: {meal.notes}</p><br />
          <p>Times:</p>
          <ul>
            {times}
          </ul>
          <button onClick={this.editMeal}>Edit</button>
        </div>
      )
    } else {
      return(
        <div>        
          <Formik 
          initialValues={{
            name: meal.meal,
            url: meal.url, 
            ingredients: ingredientValues, 
            notes: meal.notes
          }}
          onSubmit={this.submitEdit}
          render={({
            values,
            isSubmitting
          }) => (
            <Form>
              <label htmlFor="name">Name: </label>
              <Field type="text" id="name" name="name" /><br />
              <ErrorMessage name="name" /><br />
              <label htmlFor="url">Recipe URL: </label>
              <Field type="text" id="url" name="url" /><br />
              <fieldset>
                <legend>Ingredients</legend>
                <FieldArray type="text" name="ingredients" render={arrayHelpers => (
                  <div>
                    {values.ingredients && values.ingredients.length > 0 ? (
                      values.ingredients.map((ingredient, index) => (
                        <div key={index}>
                          <Field name={`ingredients.${index}`} />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.push('')}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            -
                          </button>
                        </div>
                      ))
                    ) : (
                      <button type="button" onClick={() => arrayHelpers.push('')}>
                        Add ingredient
                      </button>
                    )}
                  </div>
                )} /><br/>
                <ErrorMessage name="ingredients" />
              </fieldset>
              <label htmlFor="notes">Notes: </label><br />
              <Field name="notes" type="textarea" /><br />
              <label html="times">Times: </label>
              <Field name="times[Breakfast]" type="checkbox" value="breakfast" checked={this.state.breakfast} onChange={() => this.handleChange('breakfast')} />Breakfast
              <Field name="times[Lunch]" type="checkbox" value="lunch" checked={this.state.lunch} onChange={() => this.handleChange('lunch')} />Lunch
              <Field name="times[Dinner]" type="checkbox" value="dinner" checked={this.state.dinner} onChange={() => this.handleChange('dinner')} />Dinner<br />
              <ErrorMessage name="times" /><br />
              <button type="submit" disabled={isSubmitting}>Submit Meal</button>
            </Form>
          )} />
          <button onClick={this.cancel}>Cancel</button>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(RecipeCard);