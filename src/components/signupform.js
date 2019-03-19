import React from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {SignupSchema} from '../schemas';
import {registerUser} from '../actions/users';
import {FormButton, Error} from './styledcomponents';

// Form to Sign Up a new account

export class SignupForm extends React.Component {
  handleRegister = values => {
    this.props.registerUser(values.username, values.password);
    return;
  }

  render() {
    let e;

    if (this.props.error) {
      e = <Error>{this.props.error}</Error>
    }

    return(
      <div>
        <h2>Sign Up</h2>
        <Formik 
          id="register"
          initialValues={{
            username: '',
            password: '',
            passconfirm: ''
          }}
          validationSchema={SignupSchema}
          validate={(values) => {
            let errors = {};
            if (values.password !== values.passconfirm) {
              errors.passconfirm = 'Both passwords must match!'
            }
            return errors;
          }}
          onSubmit={values => this.handleRegister(values)}
          render={() => (
              <Form>
                <label htmlFor="signupusername">Username </label><br />
                <Field id="usersignup" name="username" /><br />
                <ErrorMessage name="username" /><br />
                <label htmlFor="signuppassword">Password </label><br />
                <Field id="signuppassword" name="password" type="password" /><br />
                <ErrorMessage name="password" /><br />
                <label htmlFor="passconfirm">Confirm password </label><br />
                <Field id="passconfirm" name="passconfirm" type="password" /> <br />
                <ErrorMessage name="passconfirm" /><br />
                <FormButton type="submit">Submit</FormButton>
              </Form>
            )
          } 
        />
        {e}<br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
});

export default connect(mapStateToProps, { registerUser })(SignupForm)