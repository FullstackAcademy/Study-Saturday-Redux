import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Students</h1>
          <StudentList />
        </div>

        {/* add your Route here! */}
      </Router>
    );
  }
}
