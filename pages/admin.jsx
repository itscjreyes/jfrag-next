import React, { useState, useEffect } from 'react';
import fire from '../config/fire-config';
import AdminForm from '../Components/Admin/Form/form.component';
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

    return ( 
      <div>
        <AdminForm />
        <div style={{ marginTop: '130px' }}>
        {
            eps.map(ep => (
                <EpisodeItem
                    key={ep.id}
                    title={ep.title}
                    id={ep.id}
                />
            ))
        }
        </div>
      </div> 
    ) 
  }
  
  export default Admin;