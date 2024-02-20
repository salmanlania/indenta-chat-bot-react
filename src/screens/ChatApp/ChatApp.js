import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, TextField, Button, Avatar } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
import bot from './images/bot.png'
import user from './images/user.png'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';

// ... (your import statements)

const ChatApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Save initial welcome message
    setMessages([{ sender: 'ChatBot', message: 'Hello! I am a UAE Tax Consultant. How can I assist you?' }]);
  }, []);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const userMessage = inputMessage.trim();

    if (userMessage !== '') {
      // Display user message in the chat
      appendMessage('You', userMessage);
      setInputMessage('');

      try {
        // Send user message to the server
        const response = await fetch('http://127.0.0.1:8000/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: userMessage }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Display chatbot response in the chat
        appendMessage('ChatBot', data.response);
      } catch (error) {
        console.error('Error:', error);
      }

      // Clear the input field

    }
  };

  const appendMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  return (
    <div style={{float : 'right' , marginRight : '7rem'}}>
      <Button variant="contained" color="primary" onClick={handleDrawerOpen} sx={{ borderRadius : '1rem', width : '50px'}}>
        <ChatBubbleRoundedIcon />
        {/* <span>Open Chat</span> */}
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={handleDrawerClose} style={{ width: '300px !important' }}>
        <div style={{ overflow: 'auto', height: '100%', maxWidth: '400px' }}>
          <List>
            {messages.map((message, index) => (
              <ListItem key={index} style={{ textAlign: message.sender === 'You' ? 'right' : 'left', gap: '10px' }}>
                {message.sender === 'ChatBot' ? (
                  <Avatar>
                    <img src={bot} alt='bot' />
                  </Avatar>
                ) : (
                  <Avatar >
                    <img src={user} alt='user' />
                    {/* <AccountCircleIcon /> */}
                  </Avatar>
                )}
                <div
                  style={{
                    background: message.sender === 'You' ? '#2196F3' : '#f1f0f0',
                    color: message.sender === 'You' ? '#fff' : '#000',
                    borderRadius: '8px',
                    padding: '8px',
                    maxWidth: '100%',
                    wordWrap: 'break-word',
                    alignSelf: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end',
                    display: 'flex',
                    alignItems: 'center',
                    // Limit the maximum width of ChatBot's message
                    // Adjust this value as needed
                  }}
                >
                  {message.message}
                </div>
              </ListItem>
            ))}
          </List>
        </div>
        <div style={{ marginTop: 'auto', padding: '16px', display: 'flex', flexDirection: 'column-reverse' }}>
          <form onSubmit={handleSendMessage} style={{ display: 'flex' }}>
            <TextField
              label="Type a message"
              variant="outlined"
              fullWidth
              value={inputMessage}
              onChange={(e) => {
                setInputMessage(e.target.value)
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginLeft: '8px' }}
              disabled={!inputMessage.trim()} // Disable button when the TextField is empty
            >
              Send
            </Button>
          </form>
        </div>
      </Drawer>
    </div>
  );
};

export default ChatApp;

