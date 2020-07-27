import React from 'react';
import { ReactComponent as Envelope } from '../../Assets/icons/envelope.svg';
import Social from '../Social/social.component';
import Instagram from '../Instagram/instagram.component';
import Form from '../Form/form.component';

import './contact.styles.scss';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-wrapper">
          <div className="content-wrapper">
            <div className="email-wrapper">
              <Envelope />
              <a href="mailto:jesse@theworkingcapitalpodcast.com">jesse@theworkingcapitalpodcast.com</a>
            </div>
            <Social />
            <Form />
          </div>
          <Instagram />
        </div>
      </div>
    </div>
  )
}

export default Contact;