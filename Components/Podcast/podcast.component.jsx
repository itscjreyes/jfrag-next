import React from 'react';
import apple from '../../Assets/images/apple-podcasts-badge.png';
import google from '../../Assets/images/google-play-music-badge.png';
import spotify from '../../Assets/images/spotify-badge.png';
import stitcher from '../../Assets/images/stitcher-badge.png';

import './podcast.styles.scss';

function Podcast(){
  return (
    <div className="podcast-container">
        <iframe title="The Working Capital Real Estate Podcast" src="///html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/87A93A/" height="auto" width="100%" scrolling="yes"  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
        <div className="badges-wrapper">
          <a href="https://podcasts.apple.com/nl/podcast/the-working-capital-real-estate-podcast/id1505750263?l=en" target="_blank" rel="noopener noreferrer" title="Apple Podcasts"><img src={apple}/></a>
          <a href="https://play.google.com/music/m/Isou7vpx5mcx62bimpu6t7m73uy?t=The_Working_Capital_Real_Estate_Podcast" target="_blank" rel="noopener noreferrer" title="Google Play Music"><img src={google}/></a>
          <a href="https://open.spotify.com/show/61o1H7q1tO58UDKVfQi8nT" target="_blank" rel="noopener noreferrer" title="Spotify"><img src={spotify}/></a>
          <a href="https://www.stitcher.com/podcast/the-working-capital-podcast" target="_blank" rel="noopener noreferrer" title="Stitcher"><img src={stitcher}/></a>
        </div>
    </div>
  )
}

export default Podcast;