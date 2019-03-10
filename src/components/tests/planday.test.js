import React from 'react';
import {shallow} from 'enzyme';
import {PlanDay} from '../planday';

const plan = ['Eggs', 'PBJ', 'Spaghetti']

describe('<PlanDay />', () => {
    it('Renders without crashing', () => {
        shallow(<PlanDay plan={plan} />);
    });
});