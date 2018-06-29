import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Day.css';

export default class Day extends Component {
  render() {
    return (
      <div className="day">
        <h3 className="day__date">{this.props.day}</h3>
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.number
};
