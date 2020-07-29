import React, {Component} from 'react';
import Butter from 'buttercms';
import Head from 'next/head';
import Header from '../Components/Header/header.component';

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff')

export default class extends Component {
  static async getInitialProps ({ query }) {
    const res = await butter.page.retrieve('episode', query.slug)
    return res.data
  }
  render () {
    const ep = this.props.data;
    const { metadescription, description, libsyn_episode_embed_code: embed, transcript } = ep.fields;

    return (
      <div>
        <Head>
          <title>{ep.name} | Jesse Fragale</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="description" content={metadescription}></meta>
        </Head>
        <Header/>
        <div className="container">
            <h1>{ep.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: embed }} />
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div dangerouslySetInnerHTML={{ __html: transcript }} />
        </div>
      </div>
    )
  }
}