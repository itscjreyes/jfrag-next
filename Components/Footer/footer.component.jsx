import React from 'react';

function Footer(){
  return (
    <footer>
      <div className="container">
        <p>© {(new Date().getFullYear())} All Rights Reserved Jesse Fragale | Built with <a href="https://buttercms.com/" target="_blank" rel="noopener noreferrer"><img src="/buttercms-logo.png" alt="Butter CMS"/></a></p>
      </div>
    </footer>
  )
}

export default Footer;