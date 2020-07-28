import React, {Component} from 'react';
import Butter from 'buttercms';
import Head from 'next/head';
import { useRouter } from 'next/router';

const butter = Butter('dd5f93783ecbf44f198312ed30708c645ae7b0ff')

class Episode extends Component {
    static async getInitialProps() {
        const res = await butter.page.retrieve('episode', 'ep-13-passive-real-estate-investing-with-brian-burke')  
        return res.data;
    }

    render(){
        return(
            <>
            <h1>Episode Page</h1>
            </>
        )
    }
}

export default Episode;

// export async function getInitialProps() {
//     // const router = useRouter()
//     // const { id } = router.query
//     // const res = await butter.page.retrieve('podcast', id)

//     const res = await butter.page.list('episode')  
    
//     return res.data;
// }