import React from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {LoginSchema} from '../schemas';
import {login} from '../actions/auth';

export class LoginForm extends React.Component {
  handleLogin = (values, {
    setSubmitting
  }) => {
    this.props.login(values.username, values.password)
      .then(() => setSubmitting(false));
    return;
  }

  render() {
    return(
      <div>  
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
    )
  }
}

export default connect(null, { login })(LoginForm)