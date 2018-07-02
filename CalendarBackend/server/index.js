const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// const MONGODB_URI = process.env.MONGODB_URI;

/*
I have been unable to solve or successfully research a solution
to the following error when running nodemon in terminal:

"UnhandledPromiseRejectionWarning: Error: URL malformed, cannot be parsed".

Unfortunately, troubleshooting this has set me back a significant portion
of the allotted time in order to be able to test and complete the assignment.
The only work-around I know is to release my database information publicly--
a temporary solution I was hoping to avoid if even for a toy project.
*/

const MONGODB_URI =
  'mongodb://heroku_cn3rvrgb:2fhnrl9nkp1a1blrbh80t9jbg1@ds123151.mlab.com:23151/heroku_cn3rvrgb';

const PORT = 5000;

const { eventsRouter } = require('./routers');

dotenv.config();
mongoose.Promise = Promise;

async function startServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ type: '*/*' }));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'POST,GET,PATCH,DELETE,OPTIONS');
    res.header('Content-Type', 'application/json');
    return next();
  });

  app.use('/events', eventsRouter);

  app.get('/', (req, res, next) => {
    return res.redirect('/events');
  });

  app.use((err, req, res, next) => {
    return res.status(err.status || 500, {
      message: err.message
    });
  });

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to Heroku database sny-calendar-backend');
    return app.listen(PORT, () => {
      console.log(`CalendarBackend API Express server listening on port ${PORT}`);
    });
  } catch (err) {
    return Promise.reject(err);
  }
}

module.exports = startServer;
