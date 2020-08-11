import Link from 'next/link';
import { PodcastBadges } from '../Podcast-Badges/podcast-badges.component';

function Podcast(){
  return (
    <div className="podcast-container">
      <PodcastBadges/>

      <iframe title="The Working Capital Real Estate Podcast" src="///html5-player.libsyn.com/embed/destination/id/1789700/height/360/theme/custom/thumbnail/yes/direction/backward/no-cache/true/render-playlist/yes/custom-color/87A93A/" height="auto" width="100%" scrolling="yes"  allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>

      <div className="btn-center">
        <Link href="/podcast"><a className="btn btn-hollow">All Episodes</a></Link>
      </div>
    </div>
  )
}

export default Podcast;