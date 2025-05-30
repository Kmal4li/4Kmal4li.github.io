import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '' || !isValidEmail(email));
    setMessageError(message.trim() === '');

    if (name && email && message && isValidEmail(email)) {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send('service_7gc3s5l', 'template_80ji1h5', templateParams, '4jrE2jbbdoO3FcwEy')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Message failed to send. Try again later.');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                fullWidth
                margin="normal"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                sx={{ input: { color: 'black' } }}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter a valid email or phone' : ''}
                sx={{ input: { color: 'black' } }}
              />
            </div>
            <TextField
              required
              fullWidth
              margin="normal"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              sx={{ input: { color: 'black' } }}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
