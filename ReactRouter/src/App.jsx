
import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


function App() {


  return (
    <>
    <Navbar/>
    <div className='container'>

   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path = '/products' element={<Products />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
      </div>
    </>
  )
}

export default App
