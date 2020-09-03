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
                    <PodcastBadges
                        apple="https://podcasts.apple.com/nl/podcast/the-working-capital-real-estate-podcast/id1505750263?l=en"
                        google="https://play.google.com/music/m/Isou7vpx5mcx62bimpu6t7m73uy?t=The_Working_Capital_Real_Estate_Podcast"
                        spotify="https://open.spotify.com/show/61o1H7q1tO58UDKVfQi8nT"
                        stitcher="https://www.stitcher.com/podcast/the-working-capital-podcast"
                    />
                </div>
            </div>
        </div>
    )
}

export default PodcastBanner;