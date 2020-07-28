import Social from '../Social/social.component';
import 'lazysizes';

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
          <img className="lazyload" src="jesse-fragale.png" alt="Jesse Fragale"/>
        </div>
      </div>
    </div>
  )
}

export default Banner;