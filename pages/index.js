import React, {Component} from 'react';
import Butter from 'buttercms';
import Head from 'next/head';

import Header from '../Components/Header/header.component';
import Banner from '../Components/Banner/banner.component';
import About from '../Components/About/about.component';

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff');

class Home extends Component {
  static async getInitialProps() {
    const resp = await butter.page.retrieve('*', 'homepage')  
    return resp.data;
  }

  render(){
    const fields = this.props.data.fields;
    const about_img = fields.about_me_image;
    const about = fields.about_me;
    const articles = fields.articles;
    const featured = fields.featured_work;

    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Header />
        <Banner />
        <About
          image={about_img}
          content={about}
        />
      </div>
    )
  }
}

export default Home;