import { useState } from 'react'
import './App.css'
import Homepage from './Pages/Homepage'
import Aboutme from './Pages/Aboutme'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'
import CV from './Pages/CV'
import NotFound from './Pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />}/>
        <Route path="*" element={<NotFound />}/>

      </Routes>
      <Footer />
    </>
  )
}

export default App
