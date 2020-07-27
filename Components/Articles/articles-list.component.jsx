import React from 'react';

import './articles-list.styles.scss';
import Article from './article.component';

function ArticlesList({articles}) {
  return (
    <div className="articles-container">
      <div className="articles-group">
        {
          articles.map((article, i) => (
            <Article
              key={i}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ArticlesList;