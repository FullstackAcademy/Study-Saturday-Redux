import React, { useEffect } from 'react'
import { fetchStudents } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const StudentList = (props) => {
  const dispatch = useDispatch()
  const students = useSelector((state) => state.students)

  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])

  return (
    <ul>
      {students.map((student) => (
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
