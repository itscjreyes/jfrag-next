import fire from '../../config/fire-config';
import Head from 'next/head';
import Header from '../../Components/Header/header.component';
import Footer from '../../Components/Footer/footer.component';
import { Back } from '../../Components/Episode/Back/back.component';
import { Title } from '../../Components/Episode/Title/title.component';
import { EpMedia } from '../../Components/Episode/Media/media.component';
import { EpDesc } from '../../Components/Episode/Description/description.component';

const Episode = (props) => { 
  const data = props.data;
  return (
      <div className="episode-page">
      <Head>
          <title>{data.title} | The Working Capital Real Estate Podcast | Jesse Fragale</title>
          <link rel="icon" href="/Favicon.png" />
          <meta name="description" content={data.meta}></meta>
          <meta property="og:url" content={`https://jessefragale.com/podcast/${data.slug}`}></meta>
          <meta property="og:title" content={`${data.title} | The Working Capital Real Estate Podcast | Jesse Fragale`}></meta>
          <meta property="og:description" content={data.meta}></meta>
          <meta property="og:image" content="https://cdn.buttercms.com/wpW3T6jTcKrLRCC0lsg3"></meta>
      </Head>
      <Header/>
      <Back pos="top" />
      <Title 
          name={data.title}
          date={data.date}
      />
      <div className="content-wrapper">
          <div className="container">
              <EpMedia 
                  embed={data.embed}
                  apple={data.apple}
                  google={data.google}
                  spotify={data.spotify}
                  stitcher={data.stitcher}
              />
              <EpDesc
                  description={data.description}
                  transcript={data.transcript}
              />
          </div>
      </div>
      <Back pos="bottom" />
      <Footer />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => { 
    let content;
    await fire.firestore()
      .collection('episodes') 
      .doc(query.id) 
      .get() 
      .then(result => { 
        content = result.data();
      });
    return { 
      props: { 
        data: content 
      } 
    } 
} 

export default Episode;