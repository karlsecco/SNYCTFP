import React, { Component } from 'react';
import User from './User';
import Month from './Month';
import EventForm from './EventForm';

export default class Calendar extends Component {
  state = {
    currentUser: {
      firstName: 'Karl',
      lastName: 'Secco',
      username: 'karlsecco'
    },
    month: {
      name: 'February',
      year: 2018,
      days: 28
    }
  };

  render() {
    return (
      <div>
        <User user={this.state.currentUser} />
        <EventForm />
        <Month month={this.state.month} />
      </div>
    );
  }
}
