import fire from '../../config/fire-config';
import Head from 'next/head';
import Header from '../../Components/Header/header.component';
import Footer from '../../Components/Footer/footer.component';
import { Back } from '../../Components/Episode/Back/back.component';
import { Title } from '../../Components/Episode/Title/title.component';
import { EpMedia } from '../../Components/Episode/Media/media.component';
import { EpDesc } from '../../Components/Episode/Description/description.component';

const Episode = (props) => { 
  return (
      <div className="episode-page">
      <Head>
          <title>{props.title} | The Working Capital Real Estate Podcast | Jesse Fragale</title>
          <link rel="icon" href="/Favicon.png" />
          <meta name="description" content={props.content}></meta>
      </Head>
      <Header/>
      <Back pos="top" />
      <Title 
          name={props.title}
          date='2020-01-01'
      />
      <div className="content-wrapper">
          <div className="container">
              <EpMedia 
                  embed='embed'
              />
              <EpDesc
                  description={props.content}
                  transcript='transcript'
              />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => { 
    const content = {} 
    await fire.firestore()
      .collection('episodes') 
      .doc(query.id) 
      .get() 
      .then(result => { 
        content['title'] = result.data().title; 
        content['content'] = result.data().content; 
      });return { 
      props: { 
        title: content.title, 
        content: content.content, 
      } 
    } 
} 

export default Episode;