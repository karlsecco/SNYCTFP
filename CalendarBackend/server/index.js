const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// const MONGODB_URI = process.env.MONGODB_URI;
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

  app.use('/events', eventsRouter);

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
