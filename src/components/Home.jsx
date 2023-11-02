import React from 'react'
import Benefits from './Benefits'
import Preview from './Preview'
import Footer from './Footer'
import Navbar from './Navbar'
import Books from './Books'
import Hero from './Hero'

export default function Home
() {

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Books />
      <Benefits />
      <Preview />
      <Footer />
    </div>
  )
}
