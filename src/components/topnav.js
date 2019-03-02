import React from 'react';
import Login from './login';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavContainer, Nav, Logo} from './styledcomponents';

export class TopNav extends React.Component {
  render() {
    return(
      <NavContainer>
        <Nav>
          <Logo as="a" href="/">
            <FontAwesomeIcon icon="apple-alt" /> Plantry
          </Logo>
          <Login />
        </Nav>
      </NavContainer>
    )
  }
}