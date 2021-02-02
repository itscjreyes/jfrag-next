import Social from '../Social/social.component';
import Form from '../Form/form.component';
import Instagram from '../Instagram/instagram.component';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-wrapper">
          <div className="content-wrapper">
            <div className="email-wrapper">
              <img src="/envelope.svg" alt="Email Jesse Fragale"/>
              <a href="mailto:jesse@theworkingcapitalpodcast.com">jesse@theworkingcapitalpodcast.com</a>
            </div>
            <Social />
            <Form />
          </div>
          {/* <Instagram /> */}
        </div>
      </div>
    </div>
  )
}

export default Contact;