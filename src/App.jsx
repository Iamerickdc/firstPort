import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './pages/Services'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import Skills from './pages/Skills'

const App = () => {
  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="ser" element={<Services />} />
        <Route path="/cont" element={<Contact />} />
        <Route path="/skil" element={<Skills />} />

      </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}

export default App