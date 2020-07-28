import React, {Component} from 'react';
import Head from 'next/head';

import Header from '../Components/Header/header.component';
import Butter from 'buttercms';

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff');

class Episodes extends Component {
  static async getInitialProps() {
    const res = await butter.page.retrieve('*', 'homepage')  
    return res.data;
  }

  render(){
    return (
      <div className="episode-page">
        <Head>
          <title>Podcast Episodes | Jesse Fragale</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <div className="container">
          <h1>Episodes</h1>
        </div>
      </div>
    )
  }
}

export default Episodes;