import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';
import MyButton from '../MyButton';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, phoneNumber, message });
  };

  return (
    <Container maxWidth="md" sx={{ padding: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="standard"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="standard"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="standard"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="standard"
              fullWidth
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="standard"
              multiline
              rows={1}
              fullWidth
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              InputProps={{
                style: {
                  resize: 'vertical', // Set to both to allow both vertical and horizontal resizing
                  overflowY: 'auto', // Overflow behavior
                  overflowX: 'hidden', // Overflow behavior
                },
              }}
              InputLabelProps={{
                shrink: true, // Ensures the label doesn't overlap when content is entered
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <MyButton button={'Send Message'} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
