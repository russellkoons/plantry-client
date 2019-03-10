import React from 'react';
import {shallow} from 'enzyme';
import {SignupForm} from '../signupform';

describe('<SignupForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SignupForm />);
  });

  it('Calls handleRegister on form submit', () => {
    const wrapper = shallow(<SignupForm />);
    const spy = jest.spyOn(wrapper.instance(), 'handleRegister').mockImplementation(() => {});
    wrapper.find('#register').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });
});