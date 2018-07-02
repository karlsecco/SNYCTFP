import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';

export default class EventCard extends Component {
  render() {
    return (
      <div className="event-card">
        <h4>{this.props.event.title}</h4>
        <span className="event-card__time">
          {' '}
          ({this.props.event.startTime} - {this.props.event.endTime})
        </span>
        <p>Description: {this.props.event.description}</p>
      </div>
    );
  }
}

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    description: PropTypes.string
  })
};
