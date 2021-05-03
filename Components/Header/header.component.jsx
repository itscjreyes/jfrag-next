import React, {Component} from 'react';
import Link from 'next/link';
  
class Header extends Component {
  headerScroll = () => {
    window.onscroll = function() {
      const top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
      const header = document.querySelector('header');
      
      if (top === 0) {
        header.classList.remove('sticky');
      } else {
        header.classList.add('sticky');
      }
    };
  }

  handleMobileMenu = () => {
    const header = document.querySelector('header');
    const trigger = document.querySelector('.mobile-trigger');

    if (header.classList.contains('open')) {
      header.classList.remove('open');
      trigger.classList.remove('open');
    } else {
      header.classList.add('open');
      trigger.classList.add('open');
    }
  }

  mobileTrigger = (e) => {
    e.preventDefault();
    this.handleMobileMenu();
  }

  mobileMenu = (e) => {
    if (e.target.classList.contains('menu-button')){
      this.handleMobileMenu();
    }
  }

  componentDidMount(){
    document.addEventListener('click', this.mobileMenu)
    this.headerScroll();
  }

  render(){
    return (
      <header className="main-header">
        <div className="container">
          <Link href="/"><a className="logo"><img src="/jessefragale.svg" alt="Jesse Fragale"/></a></Link>
          <nav className="nav">
            <ul className="menu">
              <li className="menu-item"><Link href="/#about"><a className="menu-button">About</a></Link></li>
              <li className="menu-item"><Link href="/#media"><a className="menu-button">Media</a></Link></li>
              <li className="menu-item"><Link href="/podcast"><a className="menu-button">Podcast</a></Link></li>
              {/* <li className="menu-item"><a href="https://cadenceinvesting.com/podcast/" className="menu-button">Podcast</a></li> */}
              <li className="menu-item"><Link href="/#contact"><a className="menu-button">Contact</a></Link></li>
              <li className="menu-item"><a href="https://cadenceinvesting.com/" className="menu-button cta">Invest</a></li>
            </ul>
          </nav>
          <button className="mobile-trigger" onClick={this.mobileTrigger}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    )
  }
}

export default Header;