import React from 'react';
<<<<<<< HEAD
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
=======
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
>>>>>>> cycle-2
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
          <h1>Student Dashboard</h1>
        </div>

        <Switch>
          <Route exact path="/" component={StudentList} />
          <Route exact path="/students/:id" component={SingleStudent} />
        </Switch>

      </Router>
    );
  }
}
