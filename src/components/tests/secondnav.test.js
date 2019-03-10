import React from 'react';
import {shallow} from 'enzyme';
import SecondNav from '../secondnav';

describe('<SecondNav />', () => {
    it('Renders without crashing', () => {
        shallow(<SecondNav />);
    });
});