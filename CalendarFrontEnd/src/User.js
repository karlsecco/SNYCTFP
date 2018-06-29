import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './User.css';

export default class User extends PureComponent {
  render() {
    const { username, firstName, lastName } = this.props.user;
    return (
      <div>
        <ul className="user-list">
          <li className="user-list__username text-right">{username}</li>
          <li className="user-list__full-name text-right">
            {firstName} {lastName}
          </li>
        </ul>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }).isRequired
};
