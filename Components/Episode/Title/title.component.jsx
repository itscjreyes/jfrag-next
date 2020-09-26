function formatDate(date){
    const day = date.substring(8,10);
    const year = date.substring(0,4);
    const monthNum = date.substring(5,7);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","Decemeber"];
    let month;
    switch(monthNum){case"01":month=months[0];break;case"02":month=months[1];break;case"03":month=months[2];break;case"04":month=months[3];break;case"05":month=months[4];break;case"06":month=months[5];break;case"07":month=months[6];break;case"08":month=months[7];break;case"09":month=months[8];break;case"10":month=months[9];break;case"11":month=months[10];break;case"12":month=months[11]}

    const formatted = `${month} ${day}, ${year}`;
    return formatted;
}

export const Title = ({name, date}) => (
    <div className="title">
        <div className="container">
            <h1>Working Capital The Real Estate Podcast</h1>
            <h2>{name}</h2>
            <p>{formatDate(date)}</p>
        </div>
    </div>
)