import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
//import { fetchGitHubUser } from './services/githubAPI';
import Search from './components/Search'
import Navbar from './components/NavBar'
import Contact from './pages/Contact'

console.log("GITHUB API URL:", import.meta.env.VITE_APP_GITHUB_API_URL);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Search />
      </div>
    </>
  )

}

export default App
