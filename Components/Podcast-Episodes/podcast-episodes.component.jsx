import { EpisodeCard } from "./episode-card.component";

function PodcastEpisodes({eps}){
    return (
        <div className="podcast-episodes">
            <div className="container">
                <h2>Episodes</h2>
                <div className="episodes-group">
                {
                    eps.map((ep, i) => (
                        <EpisodeCard
                            key={i}
                            ep={ep}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default PodcastEpisodes;