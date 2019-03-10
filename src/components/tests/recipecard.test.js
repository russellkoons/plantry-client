import React from 'react';
import {shallow} from 'enzyme';
import RecipeCard from '../recipecard';

describe('<RecipeCard />', () => {
    it('Renders without crashing', () => {
        shallow(<RecipeCard />);
    });
});