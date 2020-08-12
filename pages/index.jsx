import React, {Component} from 'react';
import Butter from 'buttercms';
import Head from 'next/head';

import Header from '../Components/Header/header.component';
import Banner from '../Components/Banner/banner.component';
import About from '../Components/About/about.component';
import Media from '../Components/Media/media.component';
import Contact from '../Components/Contact/contact.component';
import Footer from '../Components/Footer/footer.component';

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff');

class Home extends Component {
  static async getInitialProps() {
    const res = await butter.page.retrieve('*', 'homepage')  
    return res.data;
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
          <title>Jesse Fragale | Real Estate Investor</title>
          <link rel="icon" href="/Favicon.png" />
        </Head>

        <Header />
        <Banner />
        <About
          image={about_img}
          content={about}
        />
        <Media
          articles={articles}
          featured={featured}
        />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home;