import React from 'react';
import {shallow} from 'enzyme';
import MealPlan from '../mealplan';

describe('<MealPlan />', () => {
    it('Renders without crashing', () => {
        shallow(<MealPlan />);
    });
});