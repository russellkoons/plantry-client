import React from 'react';
import {shallow} from 'enzyme';
import {LoginForm} from '../loginform';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  });

  it('Calls handleLogin on submit', () => {
    let wrapper = shallow(<LoginForm />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleLogin').mockImplementation(() => {});
    wrapper.find('#login').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });
});