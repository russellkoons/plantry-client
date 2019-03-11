import React from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {LoginSchema} from '../schemas';
import {login} from '../actions/auth';
import {FormButton, Error} from './styledcomponents';

// Login Form Component

export class LoginForm extends React.Component {
  handleLogin = (values, actions) => {
    this.props.login(values.username, values.password)
      .then(() => actions.setSubmitting(false));
    return;
  }

  render() {
    let e;

    if (this.props.error) {
      e = <Error>{this.props.error}</Error>
    }

    return(
      <div>  
        <h2>Login</h2>
        <Formik id="login"
          initialValues={{
            username: '',
            password: ''
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => this.handleLogin(values, actions)}
          render={({
            isSubmitting
          }) => (
              <Form>
                <label htmlFor="loginusername">Username </label><br />
                <Field id="username" name="username" /><br />
                <ErrorMessage name="username" /><br />
                <label htmlFor="loginpassword">Password </label><br />
                <Field id="password" name="password" type="password" /><br />
                <ErrorMessage name="password" /><br />
                <FormButton type="submit" disabled={isSubmitting}>Submit</FormButton>
              </Form>
            )
          } 
        />
        {e}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
});

export default connect(mapStateToProps, { login })(LoginForm)