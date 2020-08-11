import Featured from './featured.component';

function FeaturedList({featured}) {
  return (
    <div className="articles-container">
      <div className="articles-group">
        {
          featured.map((featured, i) => (
            <Featured
              key={i}
              logo={featured.logo}
              title={featured.title}
              description={featured.description}
              link={featured.link}
              linkText={featured.link_text}
            />
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedList;