import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Component/Navbar'
import Footer from '../src/Component/Footer'
import ScrollToTop from '../src/Component/ui/ScrollToTop';
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Services from '../src/Pages/Services'
import Contact from '../src/Pages/Contact'
import NotFound from '../src/Pages/NotFound'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop/>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} /> */}
            <Route path="/*" element={<NotFound/>} />

          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
