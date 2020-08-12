import Butter from 'buttercms';
import Head from 'next/head';
import Header from '../../Components/Header/header.component';
import Footer from '../../Components/Footer/footer.component';
import { Back } from '../../Components/Episode/Back/back.component';
import { Title } from '../../Components/Episode/Title/title.component';
import { EpMedia } from '../../Components/Episode/Media/media.component';
import { EpDesc } from '../../Components/Episode/Description/description.component';
const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff');

const Episode = ({ data }) => {
    const ep = data.data;
    const { metadescription, description, libsyn_episode_embed_code: embed, transcript } = ep.fields;
    
    return (
        <div className="episode-page">
            <Head>
                <title>{ep.name} | The Working Capital Real Estate Podcast | Jesse Fragale</title>
                <link rel="icon" href="/Favicon.png" />
                <meta name="description" content={metadescription}></meta>
            </Head>
            <Header/>
            <Back pos="top" />
            <Title 
                name={ep.name}
                date={ep.fields.date}
            />
            <div className="content-wrapper">
                <div className="container">
                    <EpMedia 
                        embed={embed}
                    />
                    <EpDesc
                        description={description}
                        transcript={transcript}
                    />
                </div>
            </div>
            <Back pos="bottom" />
            <Footer />
        </div>
    )
}
  
Episode.getInitialProps = async ({ query }) => {
    const res = await butter.page.retrieve('episode', query.name)
    return { data: res.data }
}
  
export default Episode;