const Article = ({ title, description, link }) => (
  <div className="article">
    <div className="content-wrapper">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-hollow">Read Article</a>
  </div>
)

export default Article;