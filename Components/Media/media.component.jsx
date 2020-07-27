import React from 'react';
import VideoList from '../YouTube/video-list.component';
import Podcast from '../Podcast/podcast.component';
import ArticlesList from  '../Articles/articles-list.component';
import FeaturedList from '../Featured Work/featured-list.component';

import './media.styles.scss';

function tabsMap(){
  const tabs = document.querySelectorAll('.media-tab');
  tabs.forEach(each => (each.onclick = tabSelect));
}

function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function tabSelect(e){
  e.preventDefault();

  if (hasClass(this, 'active') === false){
    const tabs = document.querySelectorAll('.media-tab');
    tabs.forEach(each => each.classList.remove('active'));
    this.classList.add('active');

    const allContent = document.querySelectorAll('.media-content');
    allContent.forEach(each => each.classList.remove('active'));

    const datatab = this.dataset.tab;
    const content = document.getElementById(datatab);
    content.classList.add('active');
  }
}

function Media({articles, featured}){
  tabsMap();

  return (
    <div className="media" id="media">
      <div className="container">
        <h2>Watch, Listen, Read</h2>
        <ul className="media-tabs-group">
          <li><button className="active media-tab" data-tab="videos">Videos</button></li>
          <li><button className="media-tab" data-tab="podcast">Podcast</button></li>
          <li><button className="media-tab" data-tab="articles">Articles</button></li>
          <li><button className="media-tab" data-tab="featured">Featured Work</button></li>
        </ul>
        <div className="media-content active" id="videos">
          <VideoList />
        </div>
        <div className="media-content" id="podcast">
          <Podcast />
        </div>
        <div className="media-content" id="articles">
          <ArticlesList
            articles={articles}
          />
        </div>
        <div className="media-content" id="featured">
          <FeaturedList
            featured={featured}
          />
        </div>
      </div>
    </div>
  )
}

export default Media;