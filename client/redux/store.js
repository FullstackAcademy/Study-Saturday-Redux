import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';

// ACTION TYPES go here:
const GOT_STUDENTS = 'GOT_STUDENTS';


// ACTION CREATORS go here:
const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
});


const initialState = {
  students: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_STUDENTS:
      return {
        students: action.students
      }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

// dispatch a few actions to test your store's functionality:
// store.dispatch(gotStudents(['sally', 'bob', 'sue']))


export default store;
