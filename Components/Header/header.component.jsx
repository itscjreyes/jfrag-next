import React from 'react';
import styles from './header.module.scss';

// function scrollTo() {
//   const links = document.querySelectorAll('.scroll');
//   links.forEach(each => (each.onclick = scrollAnchors));
// }

// function scrollAnchors(e, respond = null) {
//   const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
//   e.preventDefault();
//   var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
//   const targetAnchor = document.querySelector(targetID);
//   if (!targetAnchor) return;
//   const originalTop = distanceToTop(targetAnchor);
//   document.querySelector('header').classList.remove('open');
//   document.querySelector('.mobile-trigger').classList.remove('open');
//   window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
//   const checkIfDone = setInterval(function() {
//     const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
//     if (distanceToTop(targetAnchor) === 0 || atBottom) {
//       targetAnchor.tabIndex = '-1';
//       targetAnchor.focus();
//       window.history.pushState('', '', targetID);
//       clearInterval(checkIfDone);
//     }
//   }, 100);
// }

// function headerScroll() {
//   window.onscroll = function() {
//     const top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
//     const header = document.querySelector('header');
    
//     if (top === 0) {
//       header.classList.remove('sticky');
//     } else {
//       header.classList.add('sticky');
//     }
//   };
// }

// function mobileTrigger(e) {
//   e.preventDefault();

//   const header = document.querySelector('header');
//   const trigger = document.querySelector('.mobile-trigger');

//   if (header.classList.contains('open')) {
//     header.classList.remove('open');
//     trigger.classList.remove('open');
//   } else {
//     header.classList.add('open');
//     trigger.classList.add('open');
//   }
// }
  
function Header(){

  return (
    <header className={styles.mainHeader}>
      <div className={`container ${styles.container}`}>
        <button className={styles.logo}><img src="/jessefragale.svg" alt="Jesse Fragale"/></button>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}><button href="#about" className={styles.scroll}>About</button></li>
            <li className={styles.menuItem}><button href="#media" className={styles.scroll}>Media</button></li>
            <li className={styles.menuItem}><button href="#contact" className={styles.scroll}>Contact</button></li>
          </ul>
        </nav>
        <button className={styles.mobileTrigger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header;