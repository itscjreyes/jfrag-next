import React from 'react';

import styles from './about.module.scss';

function About({image, content}) {
  return (
    <div className={styles.about} id="about">
      <div className={`container ${styles.container}`}>
        <div className={styles.imgWrapper}>
          <img src={image} alt="Jesse Fragale"/>
        </div>
        <div className={styles.contentWrapper}>
          <h2>About Me</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <button href="#contact" className="scroll btn btn-cta">Let's Connect</button>
        </div>
      </div>
    </div>
  )
}

export default About;