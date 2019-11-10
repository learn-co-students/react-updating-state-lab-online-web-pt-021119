// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
  constructor(){
    super()
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

  handleBirateClick= (event) => {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    })
  }

  handleResolutionClick= (event) => {
    this.setState({
      settings:
        {...this.state.settings,
          video:
            {...this.state.settings.video, resolution: '720p'}
        }
    })
  }

  render(){
    return(
    <div className='debugger'>
      <button onClick={this.handleBirateClick} className='bitrate'>Change Birtrate</button>
      <button onClick={this.handleResolutionClick} className='resolution'>Change Resolution</button>
    </div>
    )
  }
}
