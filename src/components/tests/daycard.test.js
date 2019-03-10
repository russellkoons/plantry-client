import React from 'react';
import {shallow} from 'enzyme';
import DayCard from '../daycard';

describe('<DayCard />', () => {
    it('Renders without crashing', () => {
        shallow(<DayCard />);
    });
});