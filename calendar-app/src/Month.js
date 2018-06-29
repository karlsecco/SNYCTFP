import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

export default class Month extends PureComponent {
  render() {
    const { name, year, days } = this.props.month;

    let totalDays = [];
    let daysCount = 0;
    while (daysCount < days) {
      ++daysCount;
      totalDays.push(daysCount);
    }

    return (
      <div className="text-center">
        <h2>
          {name} {year}
        </h2>
        {totalDays.map(day => <Day key={day} day={day} />)}
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
