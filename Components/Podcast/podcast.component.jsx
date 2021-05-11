import Link from 'next/link';
import { PodcastBadges } from '../Podcast-Badges/podcast-badges.component';

function Podcast(){
  return (
    <div className="podcast-container">
      <PodcastBadges
        apple="https://podcasts.apple.com/nl/podcast/the-working-capital-real-estate-podcast/id1505750263?l=en"
        google="https://podcasts.google.com/feed/aHR0cHM6Ly93b3JraW5nY2FwaXRhbC5saWJzeW4uY29tL3Jzcw"
        spotify="https://open.spotify.com/show/61o1H7q1tO58UDKVfQi8nT"
        stitcher="https://www.stitcher.com/podcast/the-working-capital-podcast"
      />

      <iframe title="The Working Capital Real Estate Podcast" src="///html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/87A93A/" height="auto" width="100%" scrolling="yes"  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>

      <div className="btn-center">
        <Link href="/podcast"><a className="btn btn-hollow">All Episodes</a></Link>
        {/* <a href="https://cadenceinvesting.com/podcast/" className="btn btn-hollow">All Episodes</a> */}
      </div>
    </div>
  )
}

export default Podcast;