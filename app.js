const express = require('express');
const app = express();
const Student = require('./routes/student');
const Test = require('./routes/test');
const morgan = require('morgan');
const db = require('./db/db');
const path = require('path');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/student', Student);
app.use('/test', Test);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

db.sync()
  .then(() =>
    app.listen(3000, function() {
      console.log('Server is listening on port 3000!');
    })
  )
  .catch(console.error);
