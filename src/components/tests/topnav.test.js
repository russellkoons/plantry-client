import React from 'react';
import {shallow} from 'enzyme';
import {TopNav} from '../topnav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });
});