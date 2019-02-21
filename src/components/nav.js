import React from 'react';
import {Hamburger} from './hamburger';

export class Nav extends React.Component {
  render() {
    return(
      <nav className="topnav">
        <h1>
          <a href="/home">Plantry</a>
        </h1>
        <Hamburger />
      </nav>
    )
  }
}