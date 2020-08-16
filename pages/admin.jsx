import React, { useState, useEffect } from 'react';
import fire from '../config/fire-config';
import AdminHeader from '../Components/Admin/Header/admin-header.component';
import EpisodeItem from '../Components/Admin/Episode-Item/episode-item.component';

const Admin = () => {   
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
                />
            ))
        }
        </div>
      </div> 
    ) 
  }
  
  export default Admin;