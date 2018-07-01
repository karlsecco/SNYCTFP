const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  startTime: String,
  endTime: String,
  description: String
});

eventSchema.statics = {
  async createEvent(newEvent) {
    try {
      return newEvent.save();
    } catch (err) {
      return Promise.reject(err);
    }
  },
  async readEvents() {
    try {
      return this.find();
    } catch (err) {
      return Promise.reject(err);
    }
  }
};

module.exports = mongoose.model('Event', eventSchema);
