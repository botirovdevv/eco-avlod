import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Video from './components/Video'

const App = () => {
  return (
    <main className='wrapper'>
      <Navbar />
      <Header />
      <About/>
      <Video/>
    </main>
  )
}

export default App