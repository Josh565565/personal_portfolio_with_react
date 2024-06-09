import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const namePattern = /^[a-zA-Z ]{2,30}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!namePattern.test(name)) {
      alert('Please enter a valid name (2-30 characters, letters and spaces only).');
      return;
    }

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (message.length < 10) {
      alert('Please enter a message with at least 10 characters.');
      return;
    }

    alert('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact" className="px-20 mt-20 bg-[#e7e6e6] rounded-md">
      <h1 className="text-center text-3xl font-semibold pt-5 text-blue-500">Contact Me</h1>
      <div className="flex justify-between py-10 items-center">
        <div>
          <h3 className="text-xl font-bold">Send a Message</h3>
          <p>Fill in the form to send a message to me</p>
        </div>
        <div>
          <form id="contact-form" className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="h-10 w-[400px] px-2 rounded outline-none" />
            <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-10 w-[400px] px-2 rounded outline-none" />
            <textarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="5" className="p-2 rounded w-[400px] outline-none"></textarea>
            <input type="submit" value="Send" className="bg-blue-400 text-white h-10 w-[400px] rounded font-bold hover:scale-105 cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
