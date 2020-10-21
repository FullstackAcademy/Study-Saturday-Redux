const db = require('../db');
const Student = require('./students');
const Test = require('./tests');

Test.belongsTo(Student, { as: 'student' });
Student.hasMany(Test);

module.exports = {
  db,
  Student,
  Test
};
