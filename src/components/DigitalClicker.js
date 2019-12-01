import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor(){
    super();

    //Initial state
    this.state = {
      timesClicked : 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {timesClicked: previousState.timesClicked + 1}
    })
  }

  render(){
    return(
      <div>
      <button onClick={this.handleClick}><h1>{this.state.timesClicked}</h1></button>
      </div>
    )
  }
}

export default DigitalClicker
