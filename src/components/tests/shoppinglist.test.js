import React from 'react';
import {shallow} from 'enzyme';
import {ShoppingList} from '../shoppinglist';

// ShoppingList Test

const plan = {
  mealplans: {
    meal: 'Spaghetti',
    day: 'Sunday',
    time: 'Dinner'
  }
}

const meals = [
  {
    meal: 'Spaghetti',
    ingredients: [
      {ingredient: 'pasta'},
      {ingredient: 'sauce'}
    ],
    times: [
      {time: 'Dinner'}
    ]
  }
]

describe('<ShoppingList />', () => {
    it('Renders without crashing', () => {
        shallow(<ShoppingList plan={plan} meals={meals} />);
    });
});