const { Event } = require('../models');

async function readEvents(req, res, next) {
  try {
    const { events } = await Event.find();
    return res.json({ data: events });
  } catch (err) {
    return next(err);
  }
}

async function createEvent(req, res, next) {
  try {
    const newEvent = await Event.insert(new Event(req.body.data));
    return res.status(201).json({ data: newEvent });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createEvent,
  readEvents
};
