import React from 'react';

const avgGrade = (tests) => {
  return Math.round(
    tests.map((test) => test.grade).reduce((x, y) => x + y) / tests.length
  );
};

const StudentList = (props) => {
  return (
    <tbody>
      {props.students.map((student) => {
        const hasTests = student.tests && student.tests.length;
        return (
          <tr key={student.id}>
            <td>{student.fullName}</td>
            {hasTests ?
              <td>{avgGrade(student.tests)}%</td>
              :
              <td>No tests yet!</td>
            }
          </tr>
        )
      })}
    </tbody>
  );
};

export default StudentList;
