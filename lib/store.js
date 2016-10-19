// store.js
import React from 'react';
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/rootReducer';

// check local storage for token, save to userData
let userData = localStorage.getItem('token');

// list of components to be rendered to dashboard
let dashboardComponents = [
	'Collection',
	'Post'
]

// define default state for store
const defaultState = {
	user: userData,
	dashboardComponents: dashboardComponents
};

// instantiate store
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;