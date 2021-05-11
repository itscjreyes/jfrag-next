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
                    <h1><span className="lg">Working Capital</span> <span className="red">The Real Estate Podcast</span></h1>
                    <PodcastBadges
                        apple="https://podcasts.apple.com/nl/podcast/the-working-capital-real-estate-podcast/id1505750263?l=en"
                        google="https://podcasts.google.com/feed/aHR0cHM6Ly93b3JraW5nY2FwaXRhbC5saWJzeW4uY29tL3Jzcw"
                        spotify="https://open.spotify.com/show/61o1H7q1tO58UDKVfQi8nT"
                        stitcher="https://www.stitcher.com/podcast/the-working-capital-podcast"
                    />
                </div>
            </div>
        </div>
    )
}

export default PodcastBanner;