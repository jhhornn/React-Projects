// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import Info from './components/Info.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <main className='main--content'>
        <Info />
        <About />
        <Interests />
      </main>
      <Footer />
    </>
  )
}

export default App
