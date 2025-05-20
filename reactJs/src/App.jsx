import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home'
import Blog from './Blog'
import './App.css'
import { Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ul>
        <li><button>home</button></li>
        <li><button>blog</button></li>
        <li><button>contact</button></li>
        <li><button>hero</button></li>
      </ul>
    </div>
      <Routes>
        <Route path="/home" element={<Home/>}/>     
        <Route path="/blog" element={<Blog/>}/>     
       
      </Routes>
    </>
  )
}

export default App
