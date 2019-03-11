import React from 'react';
import {shallow} from 'enzyme';
import {MealPlan} from '../mealplan';

// MealPlan tests

describe('<MealPlan />', () => {
  it('Renders without crashing', () => {
    shallow(<MealPlan />);
  });
  
  it('Should call handleSubmit on submit', () => {
    const wrapper = shallow(<MealPlan />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleSubmit').mockImplementation(() => {});
    wrapper.find('#newmealplan').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });
});