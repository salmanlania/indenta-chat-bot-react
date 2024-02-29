import React from 'react'
import Router from './config/Router'
import Ebook from './component/Ebook.js'
import './App.css'
export default function App() {
  return (
    <div className='App'>
      {/* <Router /> */}
      <Ebook />
        {/* <List>
          <ListItem>
            <CircleSharpIcon />
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <CircleSharpIcon />
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem>
            <CircleSharpIcon />
            <ListItemText primary="Item 3" />
          </ListItem>
        </List> */}
    </div>
  )
}
