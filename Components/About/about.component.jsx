import Link from 'next/link';
import 'lazysizes';

function About({image, content}) {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="img-wrapper">
          <img src={image} className="lazyload" alt="Jesse Fragale"/>
        </div>
        <div className="content-wrapper">
          <h2>About Me</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Link href="#contact"><a className="btn btn-cta">Let's Connect</a></Link>
        </div>
      </div>
    </div>
  )
}

export default About;