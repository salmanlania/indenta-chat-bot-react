import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, TextField, Button, Avatar, Typography } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';

import bot from './images/bot.png';
import user from './images/user.png';

const ChatApp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    useEffect(() => {
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
            appendMessage('You', userMessage);
            setInputMessage('');

            try {
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
                appendMessage('ChatBot', data.response);
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const appendMessage = (sender, message) => {
        setMessages((prevMessages) => [...prevMessages, { sender, message }]);
    };

    const handleCloseChat = () => {
        handleDrawerClose();
        // Optionally, you can also clear the chat when closing
        setMessages([]);
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div style={{ borderRadius: '50%', padding: '5px' }}>
            <Button variant="contained" color="primary" onClick={handleDrawerOpen} sx={{ borderRadius: '1rem', width: '50px' }}>
                <SmartToyOutlinedIcon sx={{ fontSize: '2rem', borderRadius: '50%', cursor: 'pointer' }} />
            </Button>
            <Drawer anchor="right" open={isOpen} onClose={handleDrawerClose} style={{ width: '350px !important' }}>
                {/* Close button at the top */}
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center', padding: '8px', borderBottom: '2px black solid' }}>
                    <Button
                        color="secondary"
                        sx={{
                            background: 'red',
                            '&:hover': {
                                background: 'darkred', // Change the background color on hover
                            },
                        }}
                        onClick={handleCloseChat}
                    >
                        <CloseIcon style={{ color: 'white' }} />
                    </Button>
                    <Typography variant='h5' style={{ color: 'red', fontWeight: '1000' , fontSize : '2rem' }}>ChatBot</Typography>

                    {/* <Button variant="outlined" color="secondary" onClick={handleClearChat}>
                        Clear Chat
                    </Button> */}
                </div>
                <div style={{ overflow: 'auto', height: '80%', maxWidth: '400px' }}>
                    <List>
                        {messages.map((message, index) => (
                            <ListItem key={index} style={{ justifyContent: message.sender === 'ChatBot' ? 'flex-start' : 'flex-end', gap: '10px' }} >
                                {message.sender === 'ChatBot' ? (
                                    <Avatar>
                                        <img src={bot} alt='bot' />
                                    </Avatar>
                                ) : (
                                    <Avatar>
                                        <img src={user} alt='user' />
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
                            style={{ marginLeft: '4px' }}
                            disabled={!inputMessage.trim()}
                        >
                            <SendIcon />
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={handleClearChat}
                            style={{ marginLeft: '4px' }}
                        >
                            <DeleteForeverIcon />
                        </Button>
                    </form>
                </div>
            </Drawer>
        </div>
    );
};

export default ChatApp;