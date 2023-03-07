import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  const handleInputChange = (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const makeVisible = (index) => {
      document.getElementsByTagName('small')[index].style.visibility = 'visible';
      setErrorMessage('You need to fill out this field')
    }

    const hideMsg = (index) => {
      document.getElementsByTagName('small')[index].style.visibility = 'hidden';
    }

    if (name.length === 0) {
      makeVisible(0)
    } else {
      hideMsg(0)
    }
    if (!validateEmail(email)) {
      makeVisible(1);
      setEmailMessage('Enter a valid email address');
    } else {
      hideMsg(1)
    }
    if (message.length === 0) {
      makeVisible(2)
    } else {
      hideMsg(2)
    }
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form>
        <label htmlFor="name"><h3>Name</h3></label>
        <input type="text" id="name" name="name" onBlur={handleInputChange}></input>
        <small>{errorMessage}</small>
        <label htmlFor="email"><h3>Email</h3></label>
        <input type="text" id="email" name="email" onBlur={handleInputChange}></input>
        <small>{emailMessage}</small>
        <label htmlFor="message"><h3>Message</h3></label>
        <textarea name="message" id="message" onBlur={handleInputChange}></textarea>
        <small>{errorMessage}</small>
        <div className="projlinks">
          <a className="projlink">Submit</a>
        </div>
      </form>
    </div>

  )
};

export default Contact;