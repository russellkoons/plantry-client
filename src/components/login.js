import React from 'react';
import {connect} from 'react-redux';
import Popup from 'reactjs-popup';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {push} from 'connected-react-router';
import {LoginSchema, SignupSchema} from '../schemas';
import {login} from '../actions/auth';
import {registerUser} from '../actions/users';
import {fetchMeals, fetchPlans} from '../actions/protected';

class Login extends React.Component {
  handleLogin = (values, {
    setSubmitting
  }) => {
    this.props.login(values.username, values.password)
      .then(() => setSubmitting(false));
    return;
  }

  handleRegister = (values, {
    setSubmitting
  }) => {
    this.props.registerUser(values.username, values.password);
    this.props.login(values.username, values.password);
    setSubmitting(false);
    return;
  }

  guestLogin = () => {
    this.props.login('guest', 'abc123');
    return;
  }

  render() {
    return(
      <div>
        <Popup trigger={<button>Login</button>} modal>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <h2>Login</h2>
            <Formik 
              initialValues={{
                username: '',
                password: ''
              }}
              validationSchema={LoginSchema}
              onSubmit={this.handleLogin}
              render={({
                isSubmitting
              }) => (
                  <Form>
                    <label htmlFor="loginusername">Username </label>
                    <Field id="username" name="username" /><br />
                    <ErrorMessage name="username" /><br />
                    <label htmlFor="loginpassword">Password </label>
                    <Field id="password" name="password" type="password" /><br />
                    <ErrorMessage name="password" /><br />
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                  </Form>
                )
              } 
            />
          </div>
        )}
        </Popup>
        <Popup trigger={<button>Sign Up</button>} modal>
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <h2>Sign Up</h2>
              <Formik 
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
              onSubmit={this.handleRegister}
              render={({isSubmitting}) => {
                return(
                  <Form>
                    <label htmlFor="signupusername">Username </label>
                    <Field id="usersignup" name="username" /><br />
                    <ErrorMessage name="username" /><br />
                    <label htmlFor="signuppassword">Password </label>
                    <Field id="signuppassword" name="password" type="password" /><br />
                    <ErrorMessage name="password" /><br />
                    <label htmlFor="passconfirm">Confirm password </label>
                    <Field id="passconfirm" name="passconfirm" type="password" /> <br />
                    <ErrorMessage name="passconfirm" /><br />
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                  </Form>
                );
              }} 
            />
              <button onClick={this.guestLogin}>Login as Guest</button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default connect(null, { push, login, registerUser, fetchMeals, fetchPlans })(Login)