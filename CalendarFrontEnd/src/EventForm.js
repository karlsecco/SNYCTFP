import React, { Component } from 'react';
import axios from 'axios';
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
    try {
      await axios.post('http://localhost:5000/events', this.state);
      this.setState({
        title: '',
        startTime: '',
        endTime: '',
        description: ''
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="E.g. SNYC calendar app due"
              required
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
              required
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
              required
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
              required
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleSubmit} className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
