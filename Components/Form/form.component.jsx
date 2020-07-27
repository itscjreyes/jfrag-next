import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import './form.styles.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false,
    }
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });

    const templateId = 'template_R6HHxYQp';

    this.sendFeedback(templateId, {
      from_name: this.state.formData.name,
      from_email: this.state.formData.email,
      message_html: this.state.formData.message
    })
  }

  sendFeedback(templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      console.log('Email successfully sent!')
      const formFields = document.querySelector('.form-content');
      formFields.innerHTML = "<p class='success-message'>Thank you for your message! I'll get back to you as soon as I can.</p>"
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    const { formData, submitted } = this.state;
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
        </div>
      </ValidatorForm>
    )
  }
}

export default Form;