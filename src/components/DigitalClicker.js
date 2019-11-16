import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    }
  }

  handleButtonClick = () => {
    const incremented = this.state.timesClicked + 1
    this.setState({
      timesClicked: incremented
    })
  }

  render() {
    return <button onClick={this.handleButtonClick}>{this.state.timesClicked}</button>
  }
}
