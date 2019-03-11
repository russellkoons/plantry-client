import React from 'react';
import '../index.css';
import LoginForm from './loginform';
import SignupForm from './signupform';
import {Button, StyledPopup, CloseButton} from './styledcomponents';

// Login Buttons and Popups

export class Login extends React.Component {

  render() {
    return(
      <div>
        <StyledPopup trigger={<Button>Login</Button>} modal>
        {close => (
          <div>
            <CloseButton onClick={close}>
              &times;
            </CloseButton>
            <LoginForm />
          </div>
        )}
        </StyledPopup>
        <StyledPopup trigger={<Button>Sign Up</Button>} modal>
          {close => (
            <div>
              <CloseButton onClick={close}>
                &times;
              </CloseButton>
              <SignupForm />
            </div>
          )}
        </StyledPopup>
      </div>
    )
  }
}