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

  it('Calls handleChange on change', () => {
    const wrapper = shallow(<ListSelect plans={plans} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleChange').mockImplementation(() => {});
    wrapper.find('#listselect').simulate('change');
    expect(spy).toHaveBeenCalled();
  });
});