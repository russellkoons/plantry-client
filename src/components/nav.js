import React from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import {Hamburger} from './hamburger';
import {logout} from '../actions/auth';

class Nav extends React.Component {
  handleLogout = () => {
    this.props.logout(this.props.authToken);
    return;
  }

  render() {
    return(
      <nav className="topnav">
        <h1>
          <a href="/">Plantry</a>
        </h1>
        <button onClick={this.handleLogout}>Logout</button>
        <Hamburger />
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
});

export default connect(mapStateToProps, { logout, push })(Nav);