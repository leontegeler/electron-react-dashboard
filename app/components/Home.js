// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock.js';
import BurgerMenu from './Menu.js';
import GLogin from './GoogleLogin.js';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;



  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Clock />
          <BurgerMenu />
          <GLogin />
        </div>
      </div>
    );
  }
}
