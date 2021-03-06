import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form, FieldArray, ErrorMessage} from 'formik';
import {updateMeal, fetchMeals} from '../actions/protected';
import styled from 'styled-components';
import {FieldSet, FormButton, PlusMinus, Error} from './styledcomponents';
import '../index.css';

// RecipeCard lets you view the recipes you've saved and allows for editing too

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 150;
  margin-left: auto;
  margin-right: auto;
`;

export class RecipeCard extends React.Component {
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

  submitEdit = (values, actions) => {
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
        actions.setSubmitting(false);
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
        <div className="recipe">
          <h3>{meal.meal}</h3>
          <a href={meal.url}>{meal.url}</a>
          <h4>Ingredients</h4>
          <UL>
            {ingredients}
          </UL>
          <h4>Notes</h4>
          <p>{meal.notes}</p><br />
          <h4>Meal Times</h4>
          <UL>
            {times}
          </UL>
          <FormButton id="editmeal" onClick={() => this.editMeal()}>Edit</FormButton>
        </div>
      )
    } else {
      let e;

      if (this.props.error) {
        e = <Error>{this.props.error}</Error>
      }

      return(
        <div className="edit">        
          <Formik 
          id="editmeal"
          initialValues={{
            name: meal.meal,
            url: meal.url, 
            ingredients: ingredientValues, 
            notes: meal.notes
          }}
          onSubmit={(values, actions) => this.submitEdit(values, actions)}
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
              <FieldSet>
                <legend>Ingredients</legend>
                <FieldArray type="text" name="ingredients" render={arrayHelpers => (
                  <div>
                    {values.ingredients && values.ingredients.length > 0 ? (
                      values.ingredients.map((ingredient, index) => (
                        <div key={index}>
                          <Field name={`ingredients.${index}`} />
                          <PlusMinus
                            type="button"
                            onClick={() => arrayHelpers.push('')}
                          >
                            +
                          </PlusMinus>
                          <PlusMinus
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            -
                          </PlusMinus>
                        </div>
                      ))
                    ) : (
                      <FormButton type="button" onClick={() => arrayHelpers.push('')}>
                        Add ingredient
                      </FormButton>
                    )}
                  </div>
                )} /><br/>
                <ErrorMessage name="ingredients" />
              </FieldSet>
              <label htmlFor="notes">Notes: </label><br />
              <Field name="notes" type="textarea" rows="5" cols="20"/><br />
              <label html="times">Times: </label><br />
              <Field name="times[Breakfast]" id="breakfast" type="checkbox" value="breakfast" checked={this.state.breakfast} onChange={() => this.handleChange('breakfast')} />Breakfast<br />
              <Field name="times[Lunch]" id="lunch" type="checkbox" value="lunch" checked={this.state.lunch} onChange={() => this.handleChange('lunch')} />Lunch<br />
              <Field name="times[Dinner]" id="dinner" type="checkbox" value="dinner" checked={this.state.dinner} onChange={() => this.handleChange('dinner')} />Dinner<br />
              <ErrorMessage name="times" /><br />
              <FormButton type="submit" disabled={isSubmitting}>Submit Meal</FormButton>
            </Form>
          )} />
          {e}
          <FormButton id="cancel" onClick={() => this.cancel()}>Cancel</FormButton>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals,
  error: state.auth.error
});

export default connect(mapStateToProps)(RecipeCard);