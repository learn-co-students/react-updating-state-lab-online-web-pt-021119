import React, {Component} from 'react';

class YouTubeDebugger extends Component {
  constructor(){
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      bitrate: 12
    }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
      ...this.state.settings,
      video: {
        ...this.state.settings.video,
      resolution: '720p'
      }
    }
    })
  }

  render(){
    return(
      <div>
      <p>Current Bitrate: {this.state.settings.bitrate} <button className='bitrate' onClick={this.changeBitrate}>Change bitrate to 12</button></p>
      <p>Current Resolution: {this.state.settings.video.resolution} <button className='resolution' onClick={this.changeResolution}>Change resolution to 720p</button></p>
      </div>
    )
  }
}

export default YouTubeDebugger
