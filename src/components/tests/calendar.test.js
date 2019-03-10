import React from 'react';
import {shallow} from 'enzyme';
import {Calendar} from '../calendar';
import {PlanDay} from '../planday';
import MealForm from '../mealform';

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

  it('Renders the plan initially', () => {
    const wrapper = shallow(<Calendar plans={plans} plan={plan} />);
    expect(wrapper.hasClass('plan')).toEqual(true);
  });

  it('Renders a form when editing', () => {
    const wrapper = shallow(<Calendar plans={plans} plan={plan} />);
    wrapper.instance().editPlan();
    wrapper.update();
    expect(wrapper.hasClass('edit')).toEqual(true);
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

  it('Should call handleUpdate', () => {
    const spy = jest.spyOn(Calendar.prototype, 'handleUpdate').mockImplementation(() => {});
    const wrapper = shallow(<Calendar plans={plans} plan={plan} />);
    wrapper.instance().editPlan();
    wrapper.update();
    wrapper.find('#updateplan').simulate('submit');
    expect(spy).toHaveBeenCalled();
  });
});