import React, { Component } from 'react';
import User from './User';

export default class Calendar extends Component {
  state = {
    currentUser: {
      firstName: 'Karl',
      lastName: 'Secco',
      username: 'karlsecco'
    }
  };
  render() {
    return (
      <div>
        <User user={this.state.currentUser} />
      </div>
    );
  }
}
