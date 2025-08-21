import { useState } from 'react'
import About from './components/About '
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import ContactUs from './components/Contact us'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowerRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="heading">Heading</div>
      <div className= "content"></div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact us" element={<ContactUs />} />
      </Routes>
    </>
  )
}
export default App
