import React from 'react'
import Butter from 'buttercms'
import Head from 'next/head'

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff')

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const res = await butter.page.retrieve('podcast', query.slug)
    return res.data
  }
  render () {
    const ep = this.props.data;
    const { metadescription } = ep.fields;

    return (
      <div>
        <Head>
          <title>{ep.name}</title>
          <meta name="description" content={metadescription}></meta>
        </Head>
        <h1>{ep.name}</h1>
      </div>
    )
  }
}