import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';

// ACTION TYPES go here:


// ACTION CREATORS go here:


// THUNK CREATORS go here:


const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
store.dispatch({type: 'HELLO_WORLD'})

export default store;
