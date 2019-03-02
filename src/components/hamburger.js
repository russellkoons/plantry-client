import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './hamburger.css';

export class Hamburger extends React.Component {
  render() {
    return(
      <Menu left>
        <a id="newplan" href="/newplan">Make a new meal plan!</a>
        <a id="plans" href="/plans">Plans</a>
        <a id="shoppinglist" href="/shoppinglist">Shopping List</a>
      </Menu>
    )
  }
}