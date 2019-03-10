import React from 'react';
import {shallow} from 'enzyme';
import {DayCard} from '../daycard';

const meals = [
  {
    meal: 'Spaghetti',
    times: {time: 'Breakfast'}
  },
  {
    meal: 'Eggs',
    times: {time: 'Dinner'}
  }
];

const formik = {values: ['a', 'b', 'c']};

const day = 'Sunday'

describe('<DayCard />', () => {
  it('Renders without crashing', () => {
    shallow(<DayCard day={day} formik={formik} meals={meals} />);
  });

  it('Calls setFieldValue on change', () => {
    let wrapper = shallow(<DayCard day={day} formik={formik} meals={meals} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'setFieldValue').mockImplementation(() => {});
    wrapper.find('#SundayBreakfast').simulate('change');
    expect(spy).toHaveBeenCalled();
  });
});