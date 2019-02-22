import React from 'react';
import Login from './login';

export class TopNav extends React.Component {
  render() {
    return(
      <nav className="topnav">
        <h1>
          <a href="/">Plantry</a>
        </h1>
        <Login />
      </nav>
    )
  }
}