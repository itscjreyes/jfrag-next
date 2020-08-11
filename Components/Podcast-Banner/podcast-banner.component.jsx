import { PodcastBadges } from '../Podcast-Badges/podcast-badges.component';
import 'lazysizes';

function PodcastBanner(){
    return (
        <div className="podcast-banner">
            <div className="container">
                <div className="img-wrapper">
                    <img src="/working-capital-real-estate-podcast.png" alt="The Working Capital Real Estate Podcast" className="lazyload no-transform"/>
                </div>
                <div className="content-wrapper">
                    <h1><span className="lg">The Working Capital</span> <span className="red">Real Estate</span> Podcast</h1>
                    <PodcastBadges />
                </div>
            </div>
        </div>
    )
}

export default PodcastBanner;