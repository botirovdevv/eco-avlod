import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'

const App = () => {
  return (
    <main className='wrapper'>
      <Navbar />
      <Header />
      <About/>
    </main>
  )
}

export default App