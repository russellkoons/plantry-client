import React from 'react';
import {shallow} from 'enzyme';
import {MealForm} from '../mealform';

// MealForm Tests

describe('<MealForm />', () => {
  it('Renders without crashing', () => {
    shallow(<MealForm />);
  });

  it('Calls handleSubmit on submit', () => {
    const wrapper = shallow(<MealForm />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleSubmit').mockImplementation(() => {});
    wrapper.find('#newmeal').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });
});