import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class Video extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    const wrapperStyles = {
      backgroundImage: `url('${this.props.vidImg}')`
    }

    return (
      <div className="video-wrapper" style={wrapperStyles}>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.vidId} onClose={() => this.setState({isOpen: false})} />
        <button className="open-video" onClick={this.openModal} title={this.props.vidTitle}>
          <div className="play">
            <img src="/play.svg" aria-hidden="true"/>
          </div>
        </button>
      </div>
    )
  }
}

export default Video;