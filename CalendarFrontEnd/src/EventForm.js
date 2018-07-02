import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EventForm extends Component {
  state = {
    title: '',
    startTime: '',
    endTime: '',
    description: ''
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // POST via axios
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="eventTitle">Event Title</label>
            <input
              type="text"
              name="eventTitle"
              id="eventTitle"
              className="form-control"
              placeholder="E.g. SNYC calendar app due"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              name="startTime"
              id="startTime"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              name="endTime"
              id="endTime"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              rows="3"
              name="description"
              id="description"
              className="form-control"
              placeholder="E.g. Complete frontend and backend builds by 6/29/18"
              onChange={this.handleChange}
            />
          </div>
          <button onSubmit={this.handleSubmit} className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
