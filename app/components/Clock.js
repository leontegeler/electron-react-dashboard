import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Time from 'react-time'
import styles from './Clock.css';

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
        <p className={styles.time} data-tid="time"><Time value={this.state.date} format="HH:mm:ss" /></p>
        <hr />
        <p><Time value={this.state.date} format="DD.MM.YYYY" /> </p>
      </div>
    )
  }
}
