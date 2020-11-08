import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import emailjs from 'emailjs-com';
import Recaptcha from 'react-recaptcha';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      recaptchaLoad: false,
      isVerified: false,
      submitted: false
    }
  }

  handleChange = event => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  recaptchaLoaded = () => {
    this.setState({ recaptchaLoad: true });
  }
  
  verifiedRecaptcha = response => {
    if (response) {
      this.setState({ isVerified: true });
    }
  }

  handleSubmit = () => {
    const { recaptchaLoad, isVerified } = this.state;

    if (recaptchaLoad && isVerified) {
      this.setState({ submitted: true }, () => {
        setTimeout(() => this.setState({ submitted: false }), 5000);
      });
  
      const templateId = 'template_R6HHxYQp';
      const userId = 'user_8qCZgPE9xxrGQml7wSZJ0';
  
      this.sendFeedback(templateId, {
        from_name: this.state.formData.name,
        from_email: this.state.formData.email,
        message_html: this.state.formData.message
      }, userId)
    }
  }

  sendFeedback(templateId, variables, userId) {
    emailjs.send(
      'gmail', templateId,
      variables, userId
    ).then(res => {
      console.log('Email successfully sent!')
      const formFields = document.querySelector('.form-content');
      formFields.innerHTML = "<p class='success-message'>Thank you for your message! I'll get back to you as soon as I can.</p>"
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    const { formData, submitted, isVerified} = this.state;
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
      >
        <h3>Have a question? Send me a message!</h3>
        <div className="form-content">
          <TextValidator
            label="Name"
            onChange={this.handleChange}
            name="name"
            value={formData.name}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <TextValidator
            label="Email"
            onChange={this.handleChange}
            name="email"
            value={formData.email}
            validators={['required', 'isEmail']}
            errorMessages={['This field is required', 'Email is not valid']}
          />
          <TextValidator
            label="Message"
            onChange={this.handleChange}
            name="message"
            multiline
            value={formData.message}
            validators={['required']}
            errorMessages={['This field is required']}
          />
          <Recaptcha
            sitekey="6LcDoeAZAAAAAFda52pqnZ9-auAH6SmV_bZ5Lx3q"
            render="explicit"
              onloadCallback={this.recaptchaLoaded}
              verifyCallback={this.verifiedRecaptcha}
          />
          { isVerified ?
            <Button
              className="custom-submit"
              color="primary"
              variant="contained"
              type="submit"
              disabled={submitted}
            >
              {
                (submitted && 'Your form is submitted!')
                || (!submitted && 'Submit')
              }
            </Button>
            :
            <Button
              className="custom-submit"
              color="primary"
              variant="contained"
              type="submit"
              disabled
            >Submit</Button>
          }
        </div>
      </ValidatorForm>
    )
  }
}

export default Form;