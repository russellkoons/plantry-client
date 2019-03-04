import React from 'react';
import '../index.css';
import LoginForm from './loginform';
import SignupForm from './signupform';
import {Login} from './login';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavContainer, Logo, Nav, Wide, Narrow, Button, HamburgerLink, CloseButton, StyledPopup} from './styledcomponents';

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
            <StyledPopup trigger={<HamburgerLink className={this.state.toggle}>Login</HamburgerLink>} modal>
              {close => (
                <div>
                  <CloseButton onClick={close}>
                    &times;
                  </CloseButton>
                  <LoginForm />
                </div>
              )}
              </StyledPopup>
            <StyledPopup trigger={<HamburgerLink className={this.state.toggle}>Sign Up</HamburgerLink>} modal>
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
        </div>
      </NavContainer>
    )
  }
}