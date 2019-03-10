import React from 'react';
import {shallow} from 'enzyme';
import {TopNav} from '../topnav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
      shallow(<TopNav />);
  });

  it('Toggles burger menu', () => {
    const wrapper = shallow(<TopNav />);
    const spy = jest.spyOn(wrapper.instance(), 'classToggle');
    expect(wrapper.state('toggle')).toEqual('hidden');
    wrapper.find('#burger').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('toggle')).toEqual('toggle');
    wrapper.find('#burger').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('toggle')).toEqual('hidden');
  });

  it('Calls guestLogin on button click', () => {
    const wrapper = shallow(<TopNav />);
    const spy = jest.spyOn(wrapper.instance(), 'guestLogin').mockImplementation(() => {});
    wrapper.find('#guestbutton').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('Calls guestLogin on HamburgerLink click', () => {
    const wrapper = shallow(<TopNav />);
    const spy = jest.spyOn(wrapper.instance(), 'guestLogin').mockImplementation(() => {});
    wrapper.find('#burgerguest').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});