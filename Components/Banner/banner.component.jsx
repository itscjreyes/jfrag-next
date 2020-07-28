import React from 'react';
import Social from '../Social/social.component';

function Banner(){
  return (
    <div className="banner">
      <div className="container">
        <div className="content-wrapper">
          <h1>Jesse Fragale</h1>
          <h2>Real Estate Investor</h2>
          <Social />
        </div>
        <div className="img-wrapper">
          <img src="jesse-fragale.png" alt="Jesse Fragale"/>
        </div>
      </div>
    </div>
  )
}

export default Banner;