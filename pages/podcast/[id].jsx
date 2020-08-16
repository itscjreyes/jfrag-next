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
          <meta name="description" content={props.meta}></meta>
      </Head>
      <Header/>
      <Back pos="top" />
      <Title 
          name={props.title}
          date={props.date}
      />
      <div className="content-wrapper">
          <div className="container">
              <EpMedia 
                  embed='embed'
              />
              <EpDesc
                  description={props.description}
                  transcript={props.transcript}
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
        content['description'] = result.data().description; 
        content['meta'] = result.data().meta; 
        content['transcript'] = result.data().transcript; 
        content['date'] = result.data().date; 
      });return { 
      props: { 
        title: content.title, 
        description: content.description, 
        meta: content.meta, 
        transcript: content.transcript, 
        date: content.date, 
      } 
    } 
} 

export default Episode;