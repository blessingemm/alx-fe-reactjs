import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import { fetchGitHubUser } from './services/githubAPI';

console.log("GITHUB API URL:", import.meta.env.VITE_APP_GITHUB_API_URL);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav style={{ marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </>
  )

}

export default App
