import React from 'react';

import styles from './social.module.scss';

function Social(){
  return (
    <div className={styles.socialGroup}>
      <a href="https://www.instagram.com/jessefragale" title="Instagram" className={styles.iconInstagram}><img src="/instagram.svg" alt="Instagram"/></a>
      <a href="https://www.linkedin.com/in/jessefragale" title="LinkedIn" className={styles.iconLinkedin}><img src="/linkedin.svg" alt="LinkedIn"/></a>
      <a href="https://twitter.com/jesse_fragale" title="Twitter" className={styles.iconTwitter}><img src="/twitter.svg" alt="Twitter"/></a>
      <a href="https://www.youtube.com/user/JesseFragale/" title="YouTube" className={styles.iconYoutube}><img src="/youtube.svg" alt="YouTube"/></a>
    </div>
  )
}

export default Social;