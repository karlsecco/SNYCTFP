import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Day extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.day}</h3>
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.number
};
