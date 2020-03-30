// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: this.props.initialCount,
    };
  }

  render() {
    let seconds = this.props.initialCount;
    // console.log(this.props);
    if (seconds === 0) {
      return 'Boom!';
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`;
    }
  }
}
