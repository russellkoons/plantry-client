import React from 'react';
import {connect} from 'react-redux';
import {Formik, Form, FieldArray, ErrorMessage, Field} from 'formik';
import {addMeal} from '../actions/protected';
import {MealSchema} from '../schemas';
import {FormButton, PlusMinus, FieldSet, Error} from './styledcomponents';
import '../index.css';

class MealForm extends React.Component {
  handleSubmit = (values, {
    setSubmitting
  }) => {
    const meal = {
      meal: values.name,
      ingredients: [],
      times: [],
      url: values.url,
      notes: values.notes
    };

    for (let i = 0; i < values.ingredients.length; i++) {
      meal.ingredients.push({
        ingredient: values.ingredients[i]
      });
    };

    Object.keys(values.times).forEach(function(key, index) {
      if (key) {
        meal.times.push({
          time: key
        })
      }
    });

    console.log(meal);

    this.props.dispatch(addMeal(meal))
      .then(() => {
        this.props.close();
        setSubmitting(false)
      })
    return;
  }

  render() {
    return(
      <div>
        <h2>New Meal</h2>
        <Formik 
          initialValues={{
            name: '',
            url: '', 
            ingredients: [''], 
            notes: '',
            times: {}
          }}
          validationSchema={MealSchema}
          onSubmit={this.handleSubmit} 
          render={({
            values,
            isSubmitting,
            handleChange
          }) => (
          <Form>
            <label htmlFor="name">Name: </label>
            <Field type="text" id="name" name="name" /><br />
            <ErrorMessage name="name" component={Error} /><br />
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
              <ErrorMessage name="ingredients" component={Error} />
            </FieldSet>
            <label htmlFor="notes">Notes: </label><br />
            <Field name="notes" type="textarea" /><br />
            <FieldSet>
              <legend html="times">Times: </legend>
              <Field name="times[Breakfast]" type="checkbox" value="breakfast" /><label>Breakfast</label><br />
              <Field name="times[Lunch]" type="checkbox" value="lunch" /><label>Lunch</label><br />
              <Field name="times[Dinner]" type="checkbox" value="dinner" /><label>Dinner</label><br />
              <ErrorMessage name="times" component={Error} /><br />
            </FieldSet>
            <FormButton type="submit" disabled={isSubmitting}>Submit Meal</FormButton>
          </Form>
        )} />
      </div>
    )
  }
}

export default connect()(MealForm);