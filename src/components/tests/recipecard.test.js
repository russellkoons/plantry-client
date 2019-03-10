import React from 'react';
import {shallow} from 'enzyme';
import {RecipeCard} from '../recipecard';

const meal = 'Spaghetti';
const times = {
  b: false,
  l: false,
  d: true
}

const meals = [
  {
    meal: 'Spaghetti',
    ingredients: [
      {ingredient: 'pasta'},
      {ingredient: 'sauce'}
    ],
    times: [
      {time: 'Dinner'}
    ]
  }
]

describe('<RecipeCard />', () => {
  it('Renders without crashing', () => {
    shallow(<RecipeCard meal={meal} meals={meals} times={times} />);
  });

  it('Displays recipe initially', () => {
    const wrapper = shallow(<RecipeCard meal={meal} meals={meals} times={times} />);
    expect(wrapper.hasClass('recipe')).toEqual(true);
  });

  it('Displays form when editing', () => {
    const wrapper = shallow(<RecipeCard meal={meal} meals={meals} times={times} />);
    wrapper.instance().editMeal();
    wrapper.update();
    expect(wrapper.hasClass('edit')).toEqual(true);
  })

  it('Calls editMeal when button is clicked', () => {
    const wrapper = shallow(<RecipeCard meal={meal} meals={meals} times={times} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'editMeal');
    wrapper.find('#editmeal').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('editing')).toEqual(true);
  });

  it('Calls cancel when button is clicked', () => {
    const wrapper = shallow(<RecipeCard meal={meal} meals={meals} times={times} />);
    const instance = wrapper.instance();
    instance.editMeal();
    const spy = jest.spyOn(instance, 'cancel');
    wrapper.find('#cancel').simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(wrapper.state('editing')).toEqual(false);
  });

  it('Calls submitEdit on form submit', () => {
    const wrapper = shallow(<RecipeCard meal={meal} meals={meals} times={times} />);
    const instance = wrapper.instance();
    instance.editMeal();
    const spy = jest.spyOn(instance, 'submitEdit').mockImplementation(() => {});
    wrapper.find('#editmeal').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });

  it('Changes state onChange of checkbox', () => {
    const wrapper = shallow(<RecipeCard meal={meal} meals={meals} times={times} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleChange');
    instance.handleChange('breakfast');
    instance.handleChange('lunch');
    instance.handleChange('dinner');
    expect(spy).toHaveBeenCalledTimes(3);
    expect(wrapper.state('breakfast')).toEqual(true);
    expect(wrapper.state('lunch')).toEqual(true);
    expect(wrapper.state('dinner')).toEqual(false);
  });
});