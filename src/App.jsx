import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import LandingPage from "./pages/LandingPage.jsx"
import Donate from "./pages/Donate.jsx"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/donate" element={<Donate />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
