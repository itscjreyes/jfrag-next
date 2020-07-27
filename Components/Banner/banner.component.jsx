import React from 'react';
import Social from '../Social/social.component';

import styles from './banner.module.scss';

function Banner(){
  return (
    <div className={styles.banner}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentWrapper}>
          <h1>Jesse Fragale</h1>
          <h2>Real Estate Investor</h2>
          <Social />
        </div>
        <div className={styles.imgWrapper}>
          <img src="jesse-fragale.png" alt="Jesse Fragale"/>
        </div>
      </div>
    </div>
  )
}

export default Banner;