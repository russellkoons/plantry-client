import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form, FieldArray} from 'formik';

export class MealForm extends React.Component {
  render() {
    return(
      <div>
        <h2>New Meal</h2>
        <Formik initialValues={{name: '', ingredients: [''], notes: ''}} render={({values}) => (
          <Form>
            <label htmlFor="name">Name: </label>
            <Field type="text" id="name" name="name" /><br/>
            <Field type="text" id="url" name="url" /><br/>
            <fieldset>
              <legend>Ingredients</legend>
              <FieldArray type="text" name="ingredients" render={arrayHelpers => (
                <div>
                  {values.ingredients && values.ingredients.length > 0 ? (
                    values.ingredients.map((ingredient, index) => (
                      <div key={index}>
                        <Field name={`ingredient.${index}`} />
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
            </fieldset>
            <label htmlFor="notes">Notes: </label>
            <Field name="notes" type="textarea" /><br/>
            <button onClick={e => e.preventDefault()}>Submit Meal</button>
          </Form>
        )} />
      </div>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(MealForm);