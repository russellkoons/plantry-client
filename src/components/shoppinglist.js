import React from 'react';
import {connect} from 'react-redux';

export class ShoppingList extends React.Component {
  render() {
    const list = [];
    const formatted = [];

    const short = [...new Set(list)]

    for (let i = 0; i < short.length; i++) {
      formatted.push(
        <div key={i}>
          <input type="checkbox" /><span>{short[i]}</span>
        </div>
      )
    }

    return(
      <div>
        <h2>Shopping List</h2>
        {formatted}
      </div>
    )
  }
}