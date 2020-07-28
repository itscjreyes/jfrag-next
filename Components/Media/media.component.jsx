import React, {Component} from 'react';
import VideoList from '../YouTube/video-list.component';
import Podcast from '../Podcast/podcast.component';
import ArticlesList from  '../Articles/articles-list.component';
import FeaturedList from '../Featured Work/featured-list.component';

class Media extends Component {
  tabsMap = () => {
    const tabs = document.querySelectorAll('.media-tab');
    tabs.forEach(each => (each.onclick = this.tabSelect));
  }
  
  tabSelect = (e) => {
    e.preventDefault();
  
    if (e.target.classList.contains('active') === false){
      const tabs = document.querySelectorAll('.media-tab');
      tabs.forEach(each => each.classList.remove('active'));
      e.target.classList.add('active');
  
      const allContent = document.querySelectorAll('.media-content');
      allContent.forEach(each => each.classList.remove('active'));
  
      const datatab = e.target.dataset.tab;
      const content = document.getElementById(datatab);
      content.classList.add('active');
    }
  }

  componentDidMount(){
    this.tabsMap();
  }

  render() {
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
              articles={this.props.articles}
            />
          </div>
          <div className="media-content" id="featured">
            <FeaturedList
              featured={this.props.featured}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Media;