import React from 'react';
import {shallow} from 'enzyme';
import {RecipePopup} from '../recipepopup';

const meals = [
  {
    meal: 'Spaghetti',
    times: {time: 'Dinner'}
  }
]

describe('<RecipePopup />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipePopup meal='Spaghetti' k='1' meals={meals} />);
    });
});