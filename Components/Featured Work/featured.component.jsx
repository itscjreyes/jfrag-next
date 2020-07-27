import React from 'react';

import '../Articles/articles.styles.scss';

const Featured = ({ key, logo, title, description, link, linkText }) => (
  <div className="article" key={key}>
    <div className="content-wrapper">
      <img src={logo} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-hollow">{linkText}</a>
  </div>
)

export default Featured;