import React from 'react';
import Popup from 'reactjs-popup';
import '../index.css';
import LoginForm from './loginform';
import SignupForm from './signupform';
import {Button} from './styledcomponents';

export class Login extends React.Component {

  render() {
    return(
      <div>
        <Popup trigger={<Button>Login</Button>} modal>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <LoginForm />
          </div>
        )}
        </Popup>
        <Popup trigger={<Button>Sign Up</Button>} modal>
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <SignupForm />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}