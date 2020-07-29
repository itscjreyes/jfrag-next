import React, {Component} from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../Components/Header/header.component';
import Butter from 'buttercms';

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
          <title>Podcast Episodes | Jesse Fragale</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <div className="container">
          <h1><strong>Working Capital</strong> The Real Estate Podcast</h1>
            {
              eps.map((ep, i) => (
                <div>
                  <Link href={`/podcast/${ep.slug}`} key={i}><a>{ep.name}</a></Link>
                </div>
              ))
            }
        </div>
      </div>
    )
  }
}

export default Podcast;