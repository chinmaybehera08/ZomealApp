// store.js
import { createStore, combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  // other reducers if needed
});

const store = createStore(rootReducer);

export default store;
