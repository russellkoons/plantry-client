import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form, FieldArray, ErrorMessage} from 'formik';
import {addMeal, closeSesame} from '../actions/protected';
import {MealSchema} from '../schemas';

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

    this.props.dispatch(addMeal(meal))
      .then(() => setSubmitting(false))
    this.props.dispatch(closeSesame());
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
                          onClick={() => arrayHelpers.insert(index, '')}
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
            <Field name="times[Breakfast]" type="checkbox" value="breakfast" />Breakfast
            <Field name="times[Lunch]" type="checkbox" value="lunch" />Lunch
            <Field name="times[Dinner]" type="checkbox" value="dinner" />Dinner<br />
            <ErrorMessage name="times" /><br />
            <button type="submit" disabled={isSubmitting}>Submit Meal</button>
          </Form>
        )} />
      </div>
    )
  }
}

export default connect()(MealForm);