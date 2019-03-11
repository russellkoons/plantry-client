import React from 'react';
import {shallow} from 'enzyme';
import {MealInput} from '../mealinput';

// MealInput Tests

const meal = {meal: 'spaghetti'}

describe('<MealInput />', () => {
  it('Renders without crashing', () => {
    shallow(<MealInput meal={meal} />);
  });
});