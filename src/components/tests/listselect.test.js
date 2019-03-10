import React from 'react';
import {shallow} from 'enzyme';
import ListSelect from '../listselect';

describe('<ListSelect />', () => {
    it('Renders without crashing', () => {
        shallow(<ListSelect />);
    });
});