import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

// ACTION TYPES go here:
const GET_STUDENTS = 'GET_STUDENTS'

// ACTION CREATORS go here:
const getStudents = (students) => ({
  type: GET_STUDENTS,
  students
})

// THUNK CREATORS go here:
const fetchStudents = () => async (dispatch) => {
  const { data } = await axios.get('/api/students')
  dispatch(getStudents(data))
}

const initialState = {
  students: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        students: action.students
      }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));
store.dispatch({ type: 'HELLO_WORLD' })

export default store;
