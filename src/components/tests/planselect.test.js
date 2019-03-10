import React from 'react';
import {shallow} from 'enzyme';
import PlanSelect from '../planselect';

describe('<PlanSelect />', () => {
    it('Renders without crashing', () => {
        shallow(<PlanSelect />);
    });
});