import React from 'react';
import butter from '../../Assets/images/buttercms-logo.png';

import './footer.styles.scss';

function Footer(){
  return (
    <footer>
      <div className="container">
        <p>© {(new Date().getFullYear())} All Rights Reserved Jesse Fragale | Built with <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer"><img src={butter} alt="Butter CMS"/></a></p>
      </div>
    </footer>
  )
}

export default Footer;