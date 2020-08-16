import Link from 'next/link';

export const EpisodeCard = ({ep}) => {
    const [width, setWidth] = React.useState(0);
    React.useEffect(() => {
        setWidth(window.innerWidth);
    });

    const wordCount = width > 767 ? 300 : 200;

    // const desc = htmlDecode(ep.description).substring(0,wordCount);
    // const day = ep.fields.date.substring(8,10);
    // const monthNum = ep.fields.date.substring(5,7);
    // const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    // let month;
    // switch(monthNum){case"01":month=months[0];break;case"02":month=months[1];break;case"03":month=months[2];break;case"04":month=months[3];break;case"05":month=months[4];break;case"06":month=months[5];break;case"07":month=months[6];break;case"08":month=months[7];break;case"09":month=months[8];break;case"10":month=months[9];break;case"11":month=months[10];break;case"12":month=months[11]}

    function htmlDecode(input) {
        return input.replace(/&#8217;/g, "’")
                    .replace(/&rsquo;/g, "’")
                    .replace(/&#8216;/g, "‘")
                    .replace(/&#8220;/g, "“")
                    .replace(/&#8221;/g, "”")
                    .replace(/&amp;/g, "&")
                    .replace(/&nbsp;/g, " ")
                    .replace(/(<([^>]+)>)/gi, "")
    }

    return (
        <Link href={`/podcast/${ep.id}`}>
            <a className="episode-card">
                <div className="ep-date">
                    <span className="day">01</span>
                    <span className="month">Jan</span>
                </div>
                <div className="ep-content">
                    <h3 className="ep-title"><span className="play-icon"><img src="/play.svg" aria-hidden="true"/></span>{ep.title}</h3>
                    <p>description...</p>
                </div>
            </a>
        </Link>
    )
}