import * as actions from '../actions/protected';
import {CLEAR_AUTH} from '../actions/auth';

const initialState = {
  meals: [],
  plans: [],
  error: null
};

export const plantryReducer = (state = initialState, action) => {
  if (action.type === actions.FETCH_MEALS_SUCCESS) {
    return Object.assign({}, state, {
      meals: action.meals,
      error: null
    });
  } else if (action.type === actions.FETCH_MEALS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.ADD_MEAL_SUCCESS) {
    return Object.assign({}, state, {
      meals: [
        ...state.meals,
        action.meal
      ]
    });
  } else if (action.type === actions.ADD_MEAL_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.UPDATE_MEAL_SUCCESS) {
    return Object.assign({}, state, {
      meals: state.meals.map(meal => meal.id === action.id ? {
        ...meal,
        meal: action.meal.meal,
        url: action.meal.url,
        notes: action.meal.notes,
        ingredients: action.meal.ingredients,
        times: action.meal.times
      }: meal)
    });
  } else if (action.type === actions.UPDATE_MEAL_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.FETCH_PLANS_SUCCESS) {
    return Object.assign({}, state, {
      plans: action.plans,
      error: null
    });
  } else if (action.type === actions.FETCH_PLANS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.ADD_PLAN_SUCCESS) {
    return Object.assign({}, state, {
      plans: [
        ...state.plans,
        action.plan
      ]
    });
  } else if (action.type === actions.ADD_PLAN_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.UPDATE_PLAN_SUCCESS) {
    return Object.assign({}, state, {
      plans: state.plans.map(plan => plan.id === action.id ? {
        ...plan,
        date: action.date,
        mealplans: action.mealplans
      }: plan)
    });
  } else if (action.type === actions.UPDATE_PLAN_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === actions.DELETE_PLAN_SUCCESS) {
    return Object.assign({}, state, {
      plans: state.plans.filter(plan => plan.id !== action.id)
    });
  } else if (action.type === actions.DELETE_PLAN_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === CLEAR_AUTH) {
    return Object.assign({}, state, {
      meals: [],
      plans: []
    });
  }
  return state;
}