import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {}
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  getStudents = async () => {
    try {
      const { data: students } = await axios.get('/api/students');
      this.setState({
        students
      });
    } catch (error) {
      console.error(error);
    }
  };

  selectStudent = (student) => {
    return this.setState({
      selectedStudent: student
    });
  };

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
