import { EpisodeCard } from "./episode-card.component";

function PodcastEpisodes({eps}){
    const orderedEps = eps.sort((a, b) => parseFloat(b.fields.date.substring(0,10).replace(/-/g,'')) - parseFloat(a.fields.date.substring(0,10).replace(/-/g,'')));

    return (
        <div className="podcast-episodes">
            <div className="container">
                <h2>Episodes</h2>
                <div className="episodes-group">
                {
                    orderedEps.map((ep, i) => (
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