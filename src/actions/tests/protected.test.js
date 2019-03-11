import * as actions from '../protected';
import {API_BASE_URL} from '../../config';

// Meal and Plan API Actions Tests

// Fetch Meal Actions

describe('fetchMealsSuccess', () => {
  it('Should return the action', () => {
    const meals = {
      meals: {}
    };
    const action = actions.fetchMealsSuccess(meals);
    expect(action.type).toEqual(actions.FETCH_MEALS_SUCCESS);
    expect(action.meals).toEqual(meals);
  });
});

describe('fetchMealsError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = actions.fetchMealsError(error);
    expect(action.type).toEqual(actions.FETCH_MEALS_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchMeals', () => {
  it('Should dispatch fetchMealsSuccess', () => {
    const meals = {
      meal: {}
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return meals;
      }
    }));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.fetchMeals()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}meals`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getState().auth.authToken}`
        }
      });
      expect(dispatch).toHaveBeenCalledWith(actions.fetchMealsSuccess(meals));
    });
  });

  it('Should dispatch fetchMealsError', () => {
    const error = 'error';

    global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.fetchMeals()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}meals`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getState().auth.authToken}`
        }
      });
      expect(dispatch).toHaveBeenCalledWith(actions.fetchMealsError(error));
    });
  });
});

// Add Meal Actions

describe('addMealSuccess', () => {
  it('Should return the action', () => {
    const meal = 'Hello!'
    const action = actions.addMealSuccess(meal);

    expect(action.type).toEqual(actions.ADD_MEAL_SUCCESS);
    expect(action.meal).toEqual(meal);
  });
});

describe('addMealError', () => {
    it('Should return the action', () => {
      const error = 'error';
      const action = actions.addMealError(error);
      expect(action.type).toEqual(actions.ADD_MEAL_ERROR);
    });
});

describe('addMeal', () => {
  it('Should dispatch addMealSuccess', () => {
    const meal = {
      meal: 'Spaghetti',
      url: 'www.google.com',
      notes: 'Hello'
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return meal;
      }
    }));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.addMeal(meal)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}meals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().auth.authToken}`
        },
        body: JSON.stringify(meal)
        });
          expect(dispatch).toHaveBeenCalledWith(actions.addMealSuccess(meal));
        });
    });
});

// Update Meal Actions

describe('updateMealSuccess', () => {
  it('Should return the action', () => {
    const meal = {
      id: 1,
      meal: 'Pasta',
      url: 'www.yahoo.com',
      notes: 'Yep'
    };
    const action = actions.updateMealSuccess(meal);
    expect(action.type).toEqual(actions.UPDATE_MEAL_SUCCESS);
    expect(action.meal).toEqual(meal);
  });
});

describe('updateMealError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = actions.updateMealError(error);
    expect(action.type).toEqual(actions.UPDATE_MEAL_ERROR);
  });
});

describe('updateMeal', () => {
  it('Sould dispatch updateMealSuccess', () => {
    const meal = {
      id: 1,
      meal: 'pasta',
      notes: 'blah',
      url: 'www.reddit.com'
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return meal;
      }
    }));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.updateMeal(meal.id, meal)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}meals/${meal.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().auth.authToken}`
        },
        body: JSON.stringify(meal)
      });
      expect(dispatch).toHaveBeenCalledWith(actions.updateMealSuccess(meal));
    });
  });
});

// Fetch Plan Actions

describe('fetchPlansSuccess', () => {
  it('Should return the action', () => {
    const plans = {
      plan: {}
    };
    const action = actions.fetchPlansSuccess(plans);
    expect(action.type).toEqual(actions.FETCH_PLANS_SUCCESS);
    expect(action.plans).toEqual(plans);
  });
});

describe('fetchPlansError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = actions.fetchPlansError(error);
    expect(action.type).toEqual(actions.FETCH_PLANS_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchPlans', () => {
  it('Should dispatch fetchPlansSuccess', () => {
    const plans = {
      plan: {}
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return plans;
      }
    }));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.fetchPlans()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}plans`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getState().auth.authToken}`
        }
      });
      expect(dispatch).toHaveBeenCalledWith(actions.fetchPlansSuccess(plans));
    });
  });

  it('Should dispatch fetchPlansError', () => {
    const error = 'error';

    global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.fetchPlans()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}plans`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getState().auth.authToken}`
        }
      });
      expect(dispatch).toHaveBeenCalledWith(actions.fetchPlansError(error));
    });
  });
});

// Add Plan Actions

describe('addPlanSuccess', () => {
  it('Should return the action', () => {
    const plan = 'Hello!'
    const action = actions.addPlanSuccess(plan);

    expect(action.type).toEqual(actions.ADD_PLAN_SUCCESS);
    expect(action.plan).toEqual(plan);
  });
});

describe('addPlanError', () => {
    it('Should return the action', () => {
      const error = 'error';
      const action = actions.addPlanError(error);
      expect(action.type).toEqual(actions.ADD_PLAN_ERROR);
      expect(action.error).toEqual(error);
    });
});

describe('addPlan', () => {
  it('Should dispatch addPlanSuccess', () => {
    const plan = {
      date: 'April 29, 1988'
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return plan;
      }
    }));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.addPlan(plan)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}plans`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().auth.authToken}`
        },
        body: JSON.stringify(plan)
        });
          expect(dispatch).toHaveBeenCalledWith(actions.addPlanSuccess(plan));
        });
    });
});

// Update Plan Actions

describe('updatePlanSuccess', () => {
  it('Should return the action', () => {
    const plan = {
      id: 1,
      date: 'April 30, 1988'
    };
    const action = actions.updatePlanSuccess(plan);
    expect(action.type).toEqual(actions.UPDATE_PLAN_SUCCESS);
    expect(action.plan).toEqual(plan);
  });
});

describe('updatePlanError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = actions.updatePlanError(error);
    expect(action.type).toEqual(actions.UPDATE_PLAN_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('updatePlan', () => {
  it('Should dispatch updatePlanSuccess', () => {
    const plan = {
      id: 1,
      date: 'April 1, 2019',
    };

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return plan;
      }
    }));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.updatePlan(plan.id, plan)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}plans/${plan.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getState().auth.authToken}`
        },
        body: JSON.stringify(plan)
      });
      expect(dispatch).toHaveBeenCalledWith(actions.updatePlanSuccess(plan));
    });
  });
});

// Delete Plan Actions

describe('deletePlanSuccess', () => {
  it('Should return the action', () => {
    const planId = 1;
    const action = actions.deletePlanSuccess(planId);
    expect(action.type).toEqual(actions.DELETE_PLAN_SUCCESS);
    expect(action.id).toEqual(planId);
  });
});

describe('deletePlanError', () => {
  it('Should return the action', () => {
    const error = 'error';
    const action = actions.deletePlanError(error);
    expect(action.type).toEqual(actions.DELETE_PLAN_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('deletePlan', () => {
  it('Should dispatch deletePlanSuccess', () => {
    const planId = 1;

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json() {
        return
      }
    }));

    const dispatch = jest.fn();
    const getState = jest.fn().mockImplementation(() => ({
      auth: {
        authToken: 1234
      }
    }));

    return actions.deletePlan(planId)(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}plans/${planId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getState().auth.authToken}`
        }
      });
      expect(dispatch).toHaveBeenCalledWith(actions.deletePlanSuccess(planId));
    });
  });
});