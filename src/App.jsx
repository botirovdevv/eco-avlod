import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Advice from './components/Advice'
import Video from './components/Video'

const App = () => {
  return (
    <main className='wrapper'>
      <Navbar />
      <Header />
      <About/>
      <Advice/>
      <Video/>
    </main>
  )
}

export default App