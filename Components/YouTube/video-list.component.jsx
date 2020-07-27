import React, { Component } from 'react';
import Video from './video.component';

import './video-list.styles.scss';

const key = process.env.REACT_APP_GOOGLE_API_KEY;
const channelID = 'UCNrawkC_bE67IG8SaJpQMgw';

class VideoList extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    }
  }

  componentDidMount(){
    let url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.search = new URLSearchParams({
      part: 'snippet',
      key: key,
      type: 'video',
      channelId: channelID,
      maxResults: 6
    })

    fetch(url)
      .then(data => data.json())
      .then(response => {
        this.setState({ videos: response.items })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="videos-container">
        <div className="videos-group">
          {
            this.state.videos.map((vid, i) => (
              <Video 
                key={i}
                vidId={vid.id.videoId}
                vidTitle={vid.snippet.title}
                vidImg={vid.snippet.thumbnails.high.url}
              />
            ))
          }
        </div>
        <div className="center-btn">
          <a href="https://www.youtube.com/user/JesseFragale/videos" target="_blank" rel="noopener noreferrer" className="btn btn-hollow">View All</a>
        </div>
      </div>
    )
  }
}

export default VideoList;