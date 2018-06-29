import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class User extends PureComponent {
  render() {
    const { username, firstName, lastName } = this.props.user;
    return (
      <div>
        <ul>
          <li>{username}</li>
          <li>
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
