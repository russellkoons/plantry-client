import React from 'react';
import {shallow} from 'enzyme';
import {MealInput} from '../mealinput';

describe('<MealInput />', () => {
    it('Renders without crashing', () => {
        shallow(<MealInput meal="Spaghetti" />);
    });
});