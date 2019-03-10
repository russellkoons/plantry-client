import React from 'react';
import {shallow} from 'enzyme';
import MealForm from '../mealform';

describe('<MealForm />', () => {
    it('Renders without crashing', () => {
        shallow(<MealForm />);
    });
});