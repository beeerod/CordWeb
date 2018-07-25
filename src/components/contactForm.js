import React, { Component } from 'react';


export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }


  render() {
    return (
      <div id="contactForm">
        <div className="contact-option">
          <h4 className="form-section">Name</h4>
          <input type="text" name="search" className="name-text" />
        </div>
        <div className="contact-option">
          <h4 className="form-section">Email</h4>
          <input type="text" name="email" className="name-text" />
        </div>
        <div className="contact-option">
          <h4 className="form-section">Subject</h4>
          <input type="text" name="subject" className="name-text" />
        </div>
        <div className="contact-option">
          <h4 className="form-section">Content</h4>
          <input type="text" name="contact" className="name-text" />
        </div>
      </div>
    );
  }

}
