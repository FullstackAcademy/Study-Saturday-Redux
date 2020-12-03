import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

// ACTION TYPES go here:
const GOT_STUDENTS = 'GOT_STUDENTS';
const GOT_SINGLE_STUDENT = 'GOT_SINGLE_STUDENT'


// ACTION CREATORS go here:
const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
});

const gotSingleStudent = (student) => ({
  type: GOT_SINGLE_STUDENT,
  student
});


// THUNK CREATORS go here:
export const fetchStudents = () => async (dispatch) => {
  const {data} = await axios.get('/api/students');
  dispatch(gotStudents(data));
}

export const fetchSingleStudent = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/students/${id}`);
  dispatch(gotSingleStudent(data));
}


const initialState = {
  students: [],
  singleStudent: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_STUDENTS:
      return {
        ...state,
        students: action.students
      }
    case GOT_SINGLE_STUDENT:
      return {
        ...state,
        singleStudent: action.student
      }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
