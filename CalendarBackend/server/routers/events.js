const express = require('express');
const router = new express.Router();
const { eventsHandler } = require('../handlers');
const { readEvents, createEvent } = eventsHandler;

router
  .route('')
  .get(readEvents)
  .post(createEvent);

module.exports = router;
