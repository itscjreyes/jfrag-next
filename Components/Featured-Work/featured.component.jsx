import 'lazysizes';

const Featured = ({ logo, title, description, link, linkText }) => (
  <div className="article">
    <div className="content-wrapper">
      <img src={logo} alt={title} className="lazyload no-transform" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-hollow">{linkText}</a>
  </div>
)

export default Featured;