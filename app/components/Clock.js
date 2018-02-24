import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Time from 'react-time'

export default class Clock extends Component {
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
        <p>Today is <Time value={this.state.date} format="YYYY/MM/DD HH:mm:ss" /></p>
      </div>
    )
  }
}
