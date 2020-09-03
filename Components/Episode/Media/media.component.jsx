import { PodcastBadges } from "../../Podcast-Badges/podcast-badges.component";

export const EpMedia = ({embed, apple, google, spotify, stitcher}) => (
    <div className="ep-media">
        <div className="ep-embed">
            <div dangerouslySetInnerHTML={{ __html: embed }} />
            <PodcastBadges 
                apple={apple}
                google={google}
                spotify={spotify}
                stitcher={stitcher}
            />
        </div>
    </div>
)