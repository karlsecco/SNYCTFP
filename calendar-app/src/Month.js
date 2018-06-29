import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Month extends PureComponent {
  render() {
    const { name, year, days } = this.props.month;
    return (
      <div>
        <p>
          {name} {year} has {days} days.
        </p>
      </div>
    );
  }
}

Month.propTypes = {
  month: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.number,
    days: PropTypes.number
  })
};
