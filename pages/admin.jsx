import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import fire from '../config/fire-config';
import AdminHeader from '../Components/Admin/Header/admin-header.component';
import EpisodeItem from '../Components/Admin/Episode-Item/episode-item.component';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const Admin = () => {  
    const [loggedIn, setLoggedIn] = useState(false);  
    
    fire.auth() 
    .onAuthStateChanged((user) => { 
      if (user) { 
        setLoggedIn(true) 
      } else { 
        setLoggedIn(false) 
      } 
    })
    
    const [eps, setEps] = useState([]);
    useEffect(() => { 
        fire.firestore() 
          .collection('episodes') 
          .onSnapshot(snap => { 
            const eps = snap.docs.map(doc => ({ 
              id: doc.id, 
              ...doc.data() 
            })); 
            setEps(eps); 
          }); 
      }, []);

    const orderedEps = eps.sort((a, b) => parseFloat(b.date.substring(0,10).replace(/-/g,'')) - parseFloat(a.date.substring(0,10).replace(/-/g,'')));
    
    return ( 
        <div>
          <Head>
          <title>ADMIN PANEL | Working Capital Real Estate Podcast</title>
          <link rel="icon" href="/Favicon.png" />
        </Head>
            {
                !loggedIn ?
                <>
                    <div className="send-to-login">
                        <div className="container">
                            <h1>Admin: Episodes</h1>
                            <p>If you are not redirected, please login to continue.</p>
                            <Link href="/login"><Button variant="contained" color="primary">Login to Admin Panel</Button></Link>
                        </div>
                    </div>
                </>
                :
                <>
                    <AdminHeader />
                    <div style={{ marginTop: '130px' }}>
                    {
                        orderedEps.map(ep => (
                            <EpisodeItem
                                key={ep.id}
                                title={ep.title}
                                date={ep.date}
                                description={ep.description}
                                meta={ep.meta}
                                embed={ep.embed}
                                transcript={ep.transcript}
                                id={ep.id}
                                apple={ep.apple}
                                google={ep.google}
                                spotify={ep.spotify}
                                stitcher={ep.stitcher}
                            />
                        ))
                    }
                    </div>
                </>
            }
        </div> 
    ) 
  }
  
  export default Admin;