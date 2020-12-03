import React, { Component } from 'react';
import StudentList from './StudentList.js';

const dummyData = [
  {
    id: 1,
    fullName: "Jordan Walke",
    firstName: "Jordan",
    lastName: "Walke",
    email: "jw@react.com",
    tests: [
      {
        id: 1,
        subject: "Computer Science",
        grade: 45,
      },
      {
        id: 2,
        subject: "Art",
        grade: 60,
      }
    ]
  },
  {
    id: 2,
    fullName: "Dan Abramov",
    firstName: "Dan",
    lastName: "Avramov",
    email: "da@react.com",
    tests: []
  }
]

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Test Average</th>
            </tr>
          </thead>
          <StudentList students={dummyData} />
        </table>
      </div>
    );
  }
}
