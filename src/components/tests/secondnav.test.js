import React from 'react';
import {shallow} from 'enzyme';
import {SecondNav} from '../secondnav';

// SecondNav Tests

describe('<SecondNav />', () => {
  it('Renders without crashing', () => {
    shallow(<SecondNav />);
  });

  it('Toggles burger menu', () => {
    const wrapper = shallow(<SecondNav />);
    const spy = jest.spyOn(wrapper.instance(), 'classToggle');
    expect(wrapper.state('toggle')).toEqual('hidden');
    wrapper.find('#burger').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('toggle')).toEqual('toggle');
    wrapper.find('#burger').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('toggle')).toEqual('hidden');
  });

  it('Calls handleLogout on button click', () => {
    const wrapper = shallow(<SecondNav />);
    const spy = jest.spyOn(wrapper.instance(), 'handleLogout').mockImplementation(() => {});
    wrapper.find('#logoutbutton').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('Calls handleLogout on HamburgerLink click', () => {
    const wrapper = shallow(<SecondNav />);
    const spy = jest.spyOn(wrapper.instance(), 'handleLogout').mockImplementation(() => {});
    wrapper.find('#hamburgerlogout').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});