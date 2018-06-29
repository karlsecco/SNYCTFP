const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  start: String,
  end: String,
  description: String
});

module.exports = mongoose.model('Event', eventSchema);
