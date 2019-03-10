import React from 'react';
import {shallow} from 'enzyme';
import {PlanSelect} from '../planselect';

const plans = [
  {
    date: 'Hello'
  },
  {
    date: 'World'
  }
]

describe('<PlanSelect />', () => {
    it('Renders without crashing', () => {
        shallow(<PlanSelect plans={plans} />);
    });

    it('Calls handleChange on change', () => {
      const wrapper = shallow(<PlanSelect plans={plans} />);
      const instance = wrapper.instance();
      const spy = jest.spyOn(instance, 'handleChange').mockImplementation(() => {});
      wrapper.find('#planselect').simulate('change');
      expect(spy).toHaveBeenCalled();
    });
});