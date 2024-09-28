import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Quotes from './container/Quotes/Quotes';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <Navbar/>
     <Quotes/>
     <Footer/>
     {/* <Restaurants/> */}
    </>
  )
}

export default App
