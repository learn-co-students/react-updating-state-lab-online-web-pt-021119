import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(
      previousState => {
        return{
          timesClicked: previousState.timesClicked + 1
        }
      }
    )
  }

  render(){
    return(
      <div id="buttonCounter">
        <h3>Times Clicked</h3>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
