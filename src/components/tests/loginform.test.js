import React from 'react';
import {shallow} from 'enzyme';
import LoginForm from '../loginform';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        shallow(<LoginForm />);
    });
});