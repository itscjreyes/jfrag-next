import React, {Component} from 'react';
import Butter from 'buttercms';
import Head from 'next/head';

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff');

class Home extends Component {
  static async getInitialProps() {
    const resp = await butter.page.retrieve('*', 'homepage')  
    return resp.data;
  }

  render(){
    console.log(this.props.data)
    return (
      <div className="container">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1>Hello world!</h1>
        </main>
      </div>
    )
  }
}

export default Home;