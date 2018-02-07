import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-clock';

export default class Time extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div>
        <p>Current time:</p>
        <Clock
          value={this.state.date}
        />
      </div>
    );
  }
}
