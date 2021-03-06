import {API_BASE_URL} from '../config';
import {normalizeErrors} from './utility';

// Plan and Meal API Actions

export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const fetchMealsSuccess = meals => ({
  type: FETCH_MEALS_SUCCESS,
  meals
});

export const FETCH_MEALS_ERROR = 'FETCH_MEALS_ERROR';
export const fetchMealsError = error => ({
  type: FETCH_MEALS_ERROR,
  error
});

export const fetchMeals = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}meals`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeErrors(res))
  .then(res => res.json())
  .then(res => dispatch(fetchMealsSuccess(res)))
  .catch(err => {
    dispatch(fetchMealsError(err))
  });
};

export const ADD_MEAL_SUCCESS = 'ADD_MEAL_SUCCESS';
export const addMealSuccess = meal => ({
  type: ADD_MEAL_SUCCESS,
  meal
});

export const ADD_MEAL_ERROR = 'ADD_MEAL_ERROR';
export const addMealError = err => ({
  type: ADD_MEAL_ERROR,
  err
});

export const addMeal = (meal) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}meals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(meal)
  })
  .then(res => normalizeErrors(res))
  .then(res => res.json())
  .then(res => {
    return dispatch(addMealSuccess(res));
  })
  .catch(err => {
    console.log(err);
    dispatch(addMealError(err))
  });
};

export const UPDATE_MEAL_SUCCESS = 'UPDATE_MEAL_SUCCESS';
export const updateMealSuccess = (meal) => ({
  type: UPDATE_MEAL_SUCCESS,
  meal
});

export const UPDATE_MEAL_ERROR = 'UPDATE_MEAL_ERROR';
export const updateMealError = err => ({
  type: UPDATE_MEAL_ERROR,
  err
});

export const updateMeal = (id, meal) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}meals/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(meal)
  })
  .then(res => normalizeErrors(res))
  .then(res => res.json())
  .then(() => {
    return dispatch(updateMealSuccess(meal));
  })
  .catch(err => dispatch(updateMealError(err)));
};

export const FETCH_PLANS_SUCCESS = 'FETCH_PLANS_SUCCESS';
export const fetchPlansSuccess = plans => ({
  type: FETCH_PLANS_SUCCESS,
  plans
});

export const FETCH_PLANS_ERROR = 'FETCH_PLANS_ERROR';
export const fetchPlansError = error => ({
  type: FETCH_PLANS_ERROR,
  error
});

export const fetchPlans = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}plans`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeErrors(res))
  .then(res => res.json())
  .then(res => dispatch(fetchPlansSuccess(res)))
  .catch(err => {
    dispatch(fetchPlansError(err));
  });
};

export const ADD_PLAN_SUCCESS = 'ADD_PLAN_SUCCESS';
export const addPlanSuccess = plan => ({
  type: ADD_PLAN_SUCCESS,
  plan
});

export const ADD_PLAN_ERROR = 'ADD_PLAN_ERROR';
export const addPlanError = error => ({
  type: ADD_PLAN_ERROR,
  error
});

export const addPlan = (plan) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}plans`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(plan)
  })
  .then(res => normalizeErrors(res))
  .then(res => res.json())
  .then(res => {
    return dispatch(addPlanSuccess(res));
  })
  .catch(err => dispatch(addPlanError(err)));
};

export const UPDATE_PLAN_SUCCESS = 'UPDATE_PLAN_SUCCESS';
export const updatePlanSuccess = (plan) => ({
  type: UPDATE_PLAN_SUCCESS,
  plan
});

export const UPDATE_PLAN_ERROR = 'UPDATE_PLAN_ERROR';
export const updatePlanError = error => ({
  type: UPDATE_PLAN_ERROR,
  error
});

export const updatePlan = (id, plan) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}plans/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(plan)
  })
  .then(res => normalizeErrors(res))
  .then(() => {
    return dispatch(updatePlanSuccess(plan));
  })
  .catch(err => dispatch(updatePlanError(err)));
};

export const DELETE_PLAN_SUCCESS = 'DELETE_PLAN_SUCCESS';
export const deletePlanSuccess = id => ({
  type: DELETE_PLAN_SUCCESS,
  id
});

export const DELETE_PLAN_ERROR = 'DELETE_PLAN_ERROR';
export const deletePlanError = error => ({
  type: DELETE_PLAN_ERROR,
  error
});

export const deletePlan = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}plans/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => normalizeErrors(res))
  .then(() => dispatch(deletePlanSuccess(id)))
  .catch(err => dispatch(deletePlanError(err)));
};