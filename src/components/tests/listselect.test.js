import React from 'react';
import {shallow} from 'enzyme';
import {ListSelect} from '../listselect';

const plans = [
  {
    date: 'Hello'
  },
  {
    date: 'World'
  }
]

describe('<ListSelect />', () => {
  it('Renders without crashing', () => {
    shallow(<ListSelect plans={plans} />);
  });

  
});