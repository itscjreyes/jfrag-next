// import redirect from 'nextjs-redirect';
// export default redirect('https://cadenceinvesting.com/podcast/');

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fire from '../config/fire-config';
import Header from '../Components/Header/header.component';
import PodcastBanner from '../Components/Podcast-Banner/podcast-banner.component';
import PodcastEpisodes from '../Components/Podcast-Episodes/podcast-episodes.component';
import Footer from '../Components/Footer/footer.component';

const Podcast = () => {
  const [eps, setEps] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    setLoading(true);
    fire.firestore() 
    .collection('episodes') 
    .onSnapshot(snap => { 
      const eps = snap.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      })); 
      setEps(eps); 
      setLoading(false);
    });
  }, []);


  return (
    <div className="episode-page">
      <Head>
        <title>The Working Capital Real Estate Podcast Episodes | Jesse Fragale</title>
      <meta name="description" content="Host Jesse Fragale provides information about real estate investing that will actually help the average aspiring investor take the steps necessary to start and grow their real estate business!"></meta>
      <meta property="og:url" content="https://jessefragale.com/podcast"></meta>
      <meta property="og:title" content="The Working Capital Real Estate Podcast Episodes | Jesse Fragale"></meta>
      <meta property="og:description" content="Host Jesse Fragale provides information about real estate investing that will actually help the average aspiring investor take the steps necessary to start and grow their real estate business!"></meta>
      <meta property="og:image" content="https://cdn.buttercms.com/wpW3T6jTcKrLRCC0lsg3"></meta>
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <Header />
      <PodcastBanner />
      <PodcastEpisodes
        eps={eps}
        loading={loading}
      />
      <Footer />
    </div>
  )
}

export default Podcast;