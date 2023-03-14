import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_3g5wh5c', 'template_wut0q0c', form.current, 'O1j8-TXbnXZuFPdin')   
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
      I receive your messages and will respond as soon as possible if a valid email address is provided.
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 style={{ fontSize: '20px' }}>janindugayanga10@gmail.com</h5>
            <a href="mailto:janindugayanga10@gmail.com">Send a message</a>
          </article>
        </div>


    <form ref={form} onSubmit={sendEmail}>
      <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
        <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" >
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP 📧 :)</span>}
        </form>
        </div>
        </section>
        
  );
};

export default Contact;
