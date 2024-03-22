import React, {useEffect} from 'react'
import Router from './config/Router'
import './App.css'
export default function App() {
  useEffect(() => {
    document.title = 'AI Taxpert';
  }, []);
  return (
    <div className='App'>
      <Router />
    </div>
  )
}
