import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_DATA = [
  {
    id: 1,
    fullName: 'Jordan Walke',
    firstName: 'Jordan',
    lastName: 'Walke',
    email: 'jw@react.com',
  },
  {
    id: 2,
    fullName: 'Dan Abramov',
    firstName: 'Dan',
    lastName: 'Avramov',
    email: 'da@react.com',
  },
]

function StudentList(props) {
  return (
    <ul>
      {DUMMY_DATA.map((student) => (
        <li key={student.id}>
          <div>
            <p>Name: {student.fullName}</p>
            <p>Email: {student.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default StudentList
