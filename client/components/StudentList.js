import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {fetchStudents} from '../redux/store'
// thunk is imported because it's middle ware

// const DUMMY_DATA = [
//   {
//     id: 1,
//     fullName: "Jordan Walke",
//     firstName: "Jordan",
//     lastName: "Walke",
//     email: "jw@react.com",
//   },
//   {
//     id: 2,
//     fullName: "Dan Abramov",
//     firstName: "Dan",
//     lastName: "Avramov",
//     email: "da@react.com",
//   }
// ]

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStudents() 
  }

  render() {
    console.log('RENDER SOMETHING ')
    // going to mapStateToProvps via pops and mapping throught he stu
    return (
      <ul> 
      {/* this was DUMMY_DATA BUT WE GET THE STATE FROM THE PROPS ON didMount*/}
        {this.props.students.map((student) => (
          <li key={student.id}>
            <div>
              <p>Name: {student.fullName}</p>
              <p>Email: {student.email}</p>
              <div>
                <Link to={`/student/${student.id}`}> View Detail </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )

  }
}

// Mapping the inital state array from the store to this componenet
// we only need students - so state.students is going to STORE and giving us the initialState ={ students: [] }
const mapStateToProps = (state) => {
  console.log('MAP STATE TO PROPS')
  return {
    students: state.students
  }
}

// This is mapping the to the THUNK creator that we need to dispatch the action to update the state in the reducer
// 
function mapDispatchToProps(dispatch) { 
  console.log('MAPDISPATCH TO PROPS')
  return {// This is a reference to store.dispatch
    loadStudents: () => {dispatch(fetchStudents())}// Wrapper function that dispatches the action
  }
}
// you can name loadStudents anything : you are just naming this function
// this only exists in this component
// you are dispatching the THUNK and since the thunk took no parameters you give none here.

// if you have a component that doesn't take state then you don't need state.

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
// connect is just something from React Redux
// it just gives them both access


