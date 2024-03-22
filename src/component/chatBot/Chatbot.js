import React, {useEffect} from 'react'
import Header from '../../screens/header/Header'
import LawBook from '../../screens/lawBook/LawBook'
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';
// import ChatApp from '../../screens/ChatApp/ChatApp'

export default function Chatbot() {
  useEffect(() => {
    document.title = 'AI Taxpert | Chatbot';
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <LawBook />
      <Footer />
      {/* <ChatApp /> */}
    </div>
  )
}
