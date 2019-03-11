import React from 'react';
import {shallow} from 'enzyme';
import {Login} from '../login';

// Login Test

describe('<Login />', () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });
});