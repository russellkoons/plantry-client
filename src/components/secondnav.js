import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {Hamburger} from './hamburger';
import {logout} from '../actions/auth';
import {NavContainer, Nav, Logo, Button} from './styledcomponents';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SecondNav extends React.Component {
  handleLogout = () => {
    this.props.logout(this.props.authToken);
    this.props.push('/');
    return;
  }

  render() {
    return(
      <NavContainer>
        <Nav>
          <Hamburger />
          <Logo as="a" href="/">
            <FontAwesomeIcon icon="apple-alt" /> Plantry
          </Logo>
          <Button onClick={this.handleLogout}>Logout</Button>
        </Nav>
      </NavContainer>
    )
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
});

export default connect(mapStateToProps, { logout, push })(SecondNav);