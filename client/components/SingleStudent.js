import React from 'react';

const avgGrade = (tests) => {
  return Math.round(
    tests.map((test) => test.grade).reduce((x, y) => x + y) / tests.length
  );
};

const SingleStudent = (props) => {
  const { student } = props;
  const hasTests = !!student.tests.length;

  return (
    <div>
      <h3>{student.fullName}</h3>
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
};

export default SingleStudent;
