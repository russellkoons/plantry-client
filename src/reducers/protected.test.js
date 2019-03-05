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
    user: 'fakeuser'
    error: null,
    loading: false
  };
})