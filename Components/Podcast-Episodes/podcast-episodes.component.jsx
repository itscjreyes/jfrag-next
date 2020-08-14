import React, {useState} from 'react';
import { EpisodeCard } from "./episode-card.component";

function PodcastEpisodes({eps}) {
    const [size, setSize] = useState(5);

    const orderedEps = eps.sort((a, b) => parseFloat(b.fields.date.substring(0,10).replace(/-/g,'')) - parseFloat(a.fields.date.substring(0,10).replace(/-/g,'')));

    return (
        <div className="podcast-episodes">
            <div className="container">
                <h2>Episodes</h2>
                <div className="episodes-group">
                {
                    orderedEps.slice(0, size).map((ep, i) => (
                        <EpisodeCard
                            key={i}
                            ep={ep}
                        />
                    ))
                }
                </div>
                {
                    size < orderedEps.length &&
                    <div className="btn-center">
                        <button className="btn btn-hollow" onClick={() => setSize(size + 5)}>Load More</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default PodcastEpisodes;