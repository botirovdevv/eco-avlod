import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Advice from './components/Advice'

const App = () => {
  return (
    <main className='wrapper'>
      <Navbar />
      <Header />
      <About/>
      <Advice/>
    </main>
  )
}

export default App