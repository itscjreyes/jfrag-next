import React from 'react';
import 'lazysizes'; 

function Footer(){
  return (
    <footer>
      <div className="container">
        <p>© {(new Date().getFullYear())} All Rights Reserved Jesse Fragale  <span>Built with <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer"><img src="/buttercms-logo.png" alt="ButterCMS" className="lazyload no-transform"/></a></span></p>
      </div>
    </footer>
  )
}

export default Footer;