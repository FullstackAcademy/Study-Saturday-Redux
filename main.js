const { green, blue, red } = require('chalk');
const server = require('./server/app');
const db = require('./server/db/db');
const PORT = 3000;

const init = async () => {
  try {
    await db.sync();
    console.log(green('Database synced'));

    server.listen(PORT, () =>
      console.log(blue('Listening on http://localhost:3000'))
    );
  } catch (err) {
    console.log(red(`There was an error starting up!`, err));
  }
};

init();
