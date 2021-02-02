import React, { Component } from 'react';
import axios from 'axios';
import 'lazysizes';

class Instagram extends Component {
  constructor() {
    super();

    this.state = {
      instaData: []
    }
  }
  
  async componentDidMount() {
    let data = []
    const url = "https://www.instagram.com/maclol"
    const instaSource = await axios.get(url)

    const instaObj = instaSource.data
      .match(
        /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
      )[1]
      .slice(0,-1)

    const convertedJsonObj = JSON.parse(instaObj);
    console.log(convertedJsonObj)
    const mediaArr = convertedJsonObj.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges

    mediaArr.map(el => {
      const node = el.node
      data.push(node)
    })
    this.setState({ instaData: data})
  }

  instaPicMouseOver = (e) => {
    const thisPic = e.target.parentElement;
    const allPics = document.querySelectorAll('.instagram-wrapper a');

    allPics.forEach(each => {
      each.classList.remove('active')
      each.classList.add('fade')
    })
    thisPic.classList.add('active')
  }

  instaPicMouseLeave = (e) => {
    const allPics = document.querySelectorAll('.instagram-wrapper a');

    allPics.forEach(each => {
      each.classList.remove('active')
      each.classList.remove('fade')
    })
  }

  renderInstaPics = () => {
    return this.state.instaData.slice(0,9).map((media, index) => {
      const permalink = `https://www.instagram.com/p/${media.shortcode}`;
      return (
        <a href={permalink} target="_blank" rel="noopener noreferrer" key={index} onMouseOver={this.instaPicMouseOver} onMouseLeave={this.instaPicMouseLeave}>
          <img
            src={media.thumbnail_src}
            alt={media.edge_media_to_caption.edges[0].node.text}
            className="lazyload no-transform"
          />
        </a>
      )
    })
  }

  render() {   
    return (
      <div className="instagram-wrapper">
        {this.state.instaData ? this.renderInstaPics() : ""}
      </div>
    )
  }
}

export default Instagram;