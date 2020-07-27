import React from 'react';

const Article = ({ key, title, description, link }) => (
  <div className="article" key={key}>
    <div className="content-wrapper">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-hollow">Read Article</a>
  </div>
)

export default Article;