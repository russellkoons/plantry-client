import React from 'react';
import {shallow} from 'enzyme';
import {Splash} from '../splash';

// Splash Test

describe('<Splash />', () => {
    it('Renders without crashing', () => {
        shallow(<Splash />);
    });
});