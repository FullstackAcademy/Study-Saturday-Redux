import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';

// ACTION TYPES go here:


// ACTION CREATORS go here:


const initialState = {};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

// dispatch a few actions to test your store's functionality:
store.dispatch(/* call your action creator here */)

// ^ you can see the logs above in your console, thanks to redux-logger!

export default store;
