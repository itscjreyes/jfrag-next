import React, { useState, useEffect } from 'react';
import fire from '../config/fire-config';
import AdminForm from '../Components/Admin/Form/form.component';

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
        <ul>
            {
                eps.map(ep => (
                    <li key={ep.id}>{ep.title}</li>
                ))
            }
        </ul>
      </div> 
    ) 
  }
  
  export default Admin;