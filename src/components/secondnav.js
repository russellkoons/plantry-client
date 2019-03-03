import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {logout} from '../actions/auth';
import {NavContainer, Logo, Button, Nav, Wide, Narrow, HamburgerLink} from './styledcomponents';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SecondNav extends React.Component {
constructor(props) {
  super(props) 
  this.state = {
    toggle: 'hidden'
  }
}
  
  handleLogout = () => {
    this.props.logout(this.props.authToken);
    this.props.push('/');
    return;
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
            <Button onClick={this.handleLogout}>Logout</Button>
          </div>            
          <Narrow>
            <Button onClick={this.classToggle}>
              <FontAwesomeIcon icon="bars" />
            </Button>
          </Narrow>
        </Nav>
        <div>
          <Wide>
            <Button as="a" href="/newplan">New Plan</Button>
            <Button as="a" href="/plans">Plans</Button>
            <Button as="a" href="/shoppinglist">Shopping List</Button>
          </Wide>
          <div>
            <HamburgerLink href="/newplan" className={this.state.toggle}>New plan</HamburgerLink>
            <HamburgerLink href="/plans" className={this.state.toggle}>Plans</HamburgerLink>
            <HamburgerLink href="/shoppinglist" className={this.state.toggle}>Shopping Lists</HamburgerLink>
          </div>
        </div>
      </NavContainer>
    )
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
});

export default connect(mapStateToProps, { logout, push })(SecondNav);