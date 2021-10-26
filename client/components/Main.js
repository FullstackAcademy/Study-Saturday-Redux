import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import StudentList from './StudentList.js'
import SingleStudent from './SingleStudent'

const Main = (props) => {
  return (
    <Router>
      <div>
        <h1>Student Dashboard</h1>
      </div>
      <Switch>
        <Route exact path="/" component={StudentList} />
        {/* add your Route here! */}
      </Switch>
    </Router>
  )
}

export default Main
