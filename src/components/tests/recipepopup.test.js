import React from 'react';
import {shallow} from 'enzyme';
import RecipePopup from '../recipepopup';

describe('<RecipePopup />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipePopup />);
    });
});