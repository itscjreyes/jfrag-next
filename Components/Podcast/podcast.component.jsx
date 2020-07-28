import Link from 'next/link';

function Podcast(){
  return (
    <div className="podcast-container">
      <div className="badges-wrapper">
        <a href="https://podcasts.apple.com/nl/podcast/the-working-capital-real-estate-podcast/id1505750263?l=en" target="_blank" rel="noopener noreferrer" title="Apple Podcasts"><img src="/apple-podcasts-badge.png" alt="Apple Podcasts"/></a>

        <a href="https://play.google.com/music/m/Isou7vpx5mcx62bimpu6t7m73uy?t=The_Working_Capital_Real_Estate_Podcast" target="_blank" rel="noopener noreferrer" title="Google Play Music"><img src="/google-play-music-badge.png" alt="Google Play Music"/></a>

        <a href="https://open.spotify.com/show/61o1H7q1tO58UDKVfQi8nT" target="_blank" rel="noopener noreferrer" title="Spotify"><img src="/spotify-badge.png" alt="Spotify"/></a>

        <a href="https://www.stitcher.com/podcast/the-working-capital-podcast" target="_blank" rel="noopener noreferrer" title="Stitcher"><img src="/stitcher-badge.png" alt="Stitcher"/></a>
      </div>

      <iframe title="The Working Capital Real Estate Podcast" src="///html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/87A93A/" height="auto" width="100%" scrolling="yes"  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>

      <div className="btn-center">
        <Link href="/episodes"><a className="btn btn-hollow">All Episodes</a></Link>
      </div>
    </div>
  )
}

export default Podcast;