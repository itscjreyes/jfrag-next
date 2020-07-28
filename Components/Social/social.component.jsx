import React from 'react';
import 'lazysizes';

function Social(){
  return (
    <div className="social-group">
      <a href="https://www.instagram.com/jessefragale" title="Instagram" className="icon-instagram"><img className="lazyload no-transform" src="/instagram.svg" alt="Instagram"/></a>
      <a href="https://www.linkedin.com/in/jessefragale" title="LinkedIn" className="icon-linkedin"><img className="lazyload no-transform" src="/linkedin.svg" alt="LinkedIn"/></a>
      <a href="https://twitter.com/jesse_fragale" title="Twitter" className="icon-twitter"><img className="lazyload no-transform" src="/twitter.svg" alt="Twitter"/></a>
      <a href="https://www.youtube.com/user/JesseFragale/" title="YouTube" className="icon-youtube"><img className="lazyload no-transform" src="/youtube.svg" alt="YouTube"/></a>
    </div>
  )
}

export default Social;