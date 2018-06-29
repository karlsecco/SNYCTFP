import React, { PureComponent } from 'react';
import Calendar from './Calendar';

export default class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <Calendar />
      </div>
    );
  }
}
