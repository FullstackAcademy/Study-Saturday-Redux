import React from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getSingleStudent, fetchSingleStudent } from "../redux/store";

const avgGrade = (tests) => {
  return Math.round(
    tests.map((test) => test.grade).reduce((x, y) => x + y) / tests.length
  );
};

class SingleStudent extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount () {
    try {
      const studentId = this.props.match.params.id
      this.props.getSingleStudent(id)
    }
    catch (error) {
      console.error(error)
    }
  }


  render() {
    const { student } = this.props;
    const hasTests = student.tests.length;

    return (
      <div>
        <h3>Detail: {student.fullName}</h3>
        {hasTests ? (
          <React.Fragment>
            <h3>Average grade: {avgGrade(student.tests)}%</h3>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {student.tests.map((test) => {
                    return (
                      <tr key={test.id}>
                        <td>{test.subject}</td>
                        <td>{test.grade}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        ) : (
          <h4>No tests on record.</h4>
        )}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    student: state.singleS
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleStudent: (id) => dispatch(fetchSingleStudent(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
