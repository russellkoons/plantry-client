import {plantryReducer} from './protected';
import * as actions from '../actions/protected';

describe('plantryReducer', () => {
  //Test Data
  const meal1 = {id: 1, meal: 'meal1', url: 'www.plantry.com', notes: 'yo'};
  const meal2 = {id: 2, meal: 'meal2', url: 'yahoo.com', notes: 'hello'};

  const plan1 = {id: 1, date: 'March 5, 2019'};
  const plan2 = {id: 2, date: 'April 29, 1988'};
  const plan3 = {id: 3, date: 'February 26, 1986'};

  const user = {
    meals: [meal1, meal2],
    plans: [plan1, plan2, plan3],
    error: null
  };

  it('Should set the initial state when nothing is passed in', () => {
    const state = plantryReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      meals: [],
      plans: [],
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let current = {};
    const state = plantryReducer(current, {type: '__UNKNOWN'});
    expect(state).toBe(current);
  });

  describe('fetchMealsSuccess', () => {
    it('Should set the meals', () => {
      let state;
      state = plantryReducer(state, actions.fetchMealsSuccess(user.meals));
      expect(state).toEqual({
        meals: user.meals,
        plans: [],
        error: null
      });
    });
  });

  describe('fetchMealsError', () => {
    it('Should set an error', () => {
      const error = 'error';
      let state;
      state = plantryReducer(state, actions.fetchMealsError(error));
      expect(state).toEqual({
        meals: [],
        plans: [],
        error: error
      });
    });
  });

  describe('addMealSuccess', () => {
    it('Should add a meal', () => {
      const meal = meal1;
      let state;
      state = plantryReducer(state, actions.addMealSuccess(meal));
      expect(state).toEqual({
          meals: [meal1],
          plans: [],
          error: null
      })
    });
  });

  describe('updateMealSuccess', () => {
    it('Should update a meal by id', () => {
      const newMeal = {
        id: 1,
        meal: 'Food',
        url: 'www.food.com',
        notes: 'Well hello'
      }
      let state = {
        meals: [meal1, meal2]
      };
      state = plantryReducer(state, actions.updateMealSuccess(newMeal));
      expect(state).toEqual({
        meals: [newMeal, meal2]
      });
    });
  });

  describe('fetchPlansSuccess', () => {
    it('Should set the plans', () => {
      let state;
      state = plantryReducer(state, actions.fetchPlansSuccess(user.plans));
      expect(state).toEqual({
        meals: [],
        plans: user.plans,
        error: null
      });
    });
  });

  describe('fetchPlansError', () => {
    it('Should set an error', () => {
      const error = 'error';
      let state;
      state = plantryReducer(state, actions.fetchPlansError(error));
      expect(state).toEqual({
        meals: [],
        plans: [],
        error: error
      });
    });
  });

  describe('addPlanSuccess', () => {
    it('Should add a plan', () => {
      const plan = plan1;
      let state;
      state = plantryReducer(state, actions.addPlanSuccess(plan));
      expect(state).toEqual({
          meals: [],
          plans: [plan1],
          error: null
      });
    });
  });

  describe('updatePlanSuccess', () => {
    it('Should update a plan by id', () => {
      const newPlan = {
        id: 1,
        date: 'May 1, 2000'
      }
      let state = {
        plans: [plan1, plan2, plan3]
      };
      state = plantryReducer(state, actions.updatePlanSuccess(newPlan));
      expect(state).toEqual({
        plans: [newPlan, plan2, plan3]
      });
    });
  });

  describe('deletePlanSuccess', () => {
    it('Should delete a plan by id', () => {
      const {id} = plan1;
      let state = {
        plans: [plan1, plan2, plan3]
      };
      state = plantryReducer(state, actions.deletePlanSuccess(id));
      expect(state).toEqual({
        plans: [plan2, plan3]
      });
    });
  });
})