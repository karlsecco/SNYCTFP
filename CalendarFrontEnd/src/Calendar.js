import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import Month from './Month';
import EventForm from './EventForm';
import EventCard from './EventCard';

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
    },
    events: {
      data: {
        data: []
      }
    }
  };

  componentDidMount = async () => {
    try {
      let events = await axios.get('http://localhost:5000/events');
      this.setState({ events });
      console.log(this.state.events.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <User user={this.state.currentUser} />
        {this.state.events.data.data && <h3>Events:</h3>}
        {this.state.events.data.data.map((event, i) => <EventCard key={i} event={event} />)}
        <EventForm />
        <Month month={this.state.month} />
      </div>
    );
  }
}
