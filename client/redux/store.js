import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

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

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

// dispatch your own actions here to test your store functionality:
store.dispatch({type: 'HELLO_WORLD'})

// ^ you can see the logs above in your console, thanks to redux-logger!

export default store;
