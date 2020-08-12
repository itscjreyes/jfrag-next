import React, {Component} from 'react';
import Head from 'next/head';

import Header from '../Components/Header/header.component';
import Butter from 'buttercms';
import PodcastBanner from '../Components/Podcast-Banner/podcast-banner.component';
import PodcastEpisodes from '../Components/Podcast-Episodes/podcast-episodes.component';
import Footer from '../Components/Footer/footer.component';

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff');

class Podcast extends Component {
  static async getInitialProps() {
    const res = await butter.page.list('episode')  
    return res.data;
  }

  render(){
    const eps = this.props.data;
    
    return (
      <div className="episode-page">
        <Head>
          <title>The Working Capital Real Estate Podcast Episodes | Jesse Fragale</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <PodcastBanner />
        <PodcastEpisodes
          eps={eps}
        />
        <Footer />
      </div>
    )
  }
}

export default Podcast;