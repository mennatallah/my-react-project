// import React from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bvadd32', 'template_rzfwecr', form.current, {
        publicKey: 'hLyGFEHZ3ViuDoNnA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
           Get on touch with our team

       <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
         <input type="text" name="user_name" />
          <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
       </form>
    </div>
    
    
  )
}
