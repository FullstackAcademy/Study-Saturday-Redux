import React from 'react';
import {fetchStudents} from '../redux/store';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <ul>
        {this.props.students.map((student) => (
          <li key={student.id}>
            <div>
              <p>Name: {student.fullName}</p>
              <p>Email: {student.email}</p>
              <Link to={`/students/${student.id}`}>View Detail</Link>
            </div>
          </li>
        ))}
      </ul>
    )

  }
}

const mapStateToProps = (state) => ({
  students: state.students
});

const mapDispatchToProps = (dispatch) => ({
  loadStudents: () => dispatch(fetchStudents())
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
