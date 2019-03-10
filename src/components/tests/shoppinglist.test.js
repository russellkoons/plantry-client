import React from 'react';
import {shallow} from 'enzyme';
import {ShoppingList} from '../shoppinglist';

const plan = {
  mealplans: {
    meal: 'Pasta',
    day: 'Sunday',
    time: 'Dinner'
  }
}

describe('<ShoppingList />', () => {
    it('Renders without crashing', () => {
        shallow(<ShoppingList plan={plan} />);
    });
});