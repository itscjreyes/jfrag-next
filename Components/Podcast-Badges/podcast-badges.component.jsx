export const PodcastBadges = props => {
    return (
        <div className="badges-wrapper">
            {
                props.apple &&
                <a href={props.apple} target="_blank" rel="noopener noreferrer" title="Apple Podcasts"><img src="/apple-podcasts-badge.png" alt="Apple Podcasts"/></a>
            }

            {
                props.google &&
                <a href={props.google} target="_blank" rel="noopener noreferrer" title="Google Play Music"><img src="/google-play-music-badge.png" alt="Google Play Music"/></a>
            }
            
            {
                props.spotify &&
                <a href={props.spotify} target="_blank" rel="noopener noreferrer" title="Spotify"><img src="/spotify-badge.png" alt="Spotify"/></a>
            }

            {
                props.stitcher &&
                <a href={props.stitcher} target="_blank" rel="noopener noreferrer" title="Stitcher"><img src="/stitcher-badge.png" alt="Stitcher"/></a>
            }
        </div>
    )
}