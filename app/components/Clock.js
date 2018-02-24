import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Time from 'react-time'

export default class Clock extends Component {

  render() {
    let now = new Date()
    return (
      <div>
        <p>Today is <Time value={now} format="YYYY/MM/DD HH:mm" /></p>
      </div>
    )
  }
}
