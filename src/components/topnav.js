import React from 'react';
import Popup from 'reactjs-popup';
import '../index.css';
import LoginForm from './loginform';
import SignupForm from './signupform';
import {Login} from './login';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavContainer, Logo, Nav, Wide, Narrow, Button, HamburgerLink} from './styledcomponents';

export class TopNav extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      toggle: 'hidden'
    }
  }
  
  classToggle = () => {
    if (this.state.toggle === 'hidden') {
      this.setState({
        toggle: 'toggle'
      })
    } else {
      this.setState({
        toggle: 'hidden'
      })
    }
  }

  render() {
    return(
      <NavContainer>
        <Nav>
          <div>
            <Logo as="a" href="/">
              <FontAwesomeIcon icon="apple-alt" /> Plantry
            </Logo>
          </div>
          <Narrow>  
            <Button onClick={this.classToggle}>
              <FontAwesomeIcon icon="bars" />
            </Button>
          </Narrow>
        </Nav>
        <div>
          <Wide>
            <Login />
          </Wide>
          <div>
            <Popup trigger={<HamburgerLink className={this.state.toggle}>Login</HamburgerLink>} modal>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <LoginForm />
                </div>
              )}
              </Popup>
            <Popup trigger={<HamburgerLink className={this.state.toggle}>Sign Up</HamburgerLink>} modal>
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
        </div>
      </NavContainer>
    )
  }
}