import React from 'react';
import {shallow, mount} from 'enzyme';
import {Calendar} from '../calendar';
import {PlanDay} from '../planday';
import MealForm from '../mealform';
import {DayCard} from '../daycard';

const plans = [
  {
    id: 1,
    mealplans: [
      {
        meal: 'Eggs',
        day: 'Sunday',
        time: 'Breakfast'
      },
      {
        meal: 'PBJ',
        day: 'Monday',
        time: 'Lunch'
      }
    ]
  }
];

const plan = 1;

describe('<Calendar />', () => {
  it('Renders without crashing', () => {
    shallow(<Calendar plans={plans} plan={plan} />);
  });

  it('Sets editing', () => {
    const wrapper = shallow(<Calendar plans={plans} plan={plan} />);
    wrapper.find('#planedit').simulate('click');
    expect(wrapper.state('editing')).toEqual(true);

    const wrapper2 = shallow(<Calendar plans={plans} plan={plan} />);
    wrapper2.instance().editPlan();
    wrapper2.update();
    wrapper2.find('#plancancel').simulate('click');
    expect(wrapper2.state('editing')).toEqual(false);
  });

  it('Callback onDelete', () => {
    const callback = jest.fn();
    const wrapper = shallow(<Calendar plans={plans} plan={plan} onDelete={callback} />);
    wrapper.find('#plandelete').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Should render correct elements', () => {
    const wrapper = shallow(<Calendar plans={plans} plan={plan} />);
    expect(wrapper.containsMatchingElement(<PlanDay />)).toEqual(true);
  });
});