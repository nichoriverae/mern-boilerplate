// import { combineReducers } from 'redux';
import get from 'lodash';

export default class Api {
  constructor({ fetch, apiHost } = {}) {}
}

// export const apiReducer = combineReducers();

export const apiSelector = state => get(state, 'api');