const { Event } = require('../models');

async function readEvents(req, res, next) {
  try {
    const events = await Event.readEvents();
    return res.json({ data: events });
  } catch (err) {
    return next(err);
  }
}

async function createEvent(req, res, next) {
  try {
    const newEvent = await Event.createEvent(new Event(req.body));
    return res.status(201).json({ data: newEvent });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createEvent,
  readEvents
};
