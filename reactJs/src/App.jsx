import { useState } from 'react'

import Home from './home'
import Blog from './Blog'
import Bosts from './Bosts'
import BostBody from './BostBody.jsx'
import './App.css'
import { postsContext } from './contexts/PostContext.jsx'
import { Route,Routes,Link  } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  let postsData=[
    {
        id:1,
        title:"hello world",
        body:"blkiugi uigfeyu uigyuvu h9g8igugo 88igug 9t78fh "
    },
    {
        id:2,
        title:"hello world",
        body:"blkiugi uigfeyu uigyuvu h9g8igugo 88igug 9t78fh "
    },
    {
        id:3,
        title:"hello world",
        body:"blkiugi uigfeyu uigyuvu h9g8igugo 88igug 9t78fh "
    },
    {
        id:4,
        title:"hello world",
        body:"blkiugi uigfeyu uigyuvu h9g8igugo 88igug 9t78fh "
    },
]

  return (
    <postsContext.Provider value={postsData}>
    <div>
      <ul>
        <Link to="/home">
          <button>home</button>
        </Link>
        <Link to="/posts">
          <button>posts</button>
        </Link>
        <Link to="/blog"> 
          <button>blog</button>
        </Link>
      </ul>
    </div>
      <Routes>
        <Route path="/home" element={<Home/>}/>     
        <Route path="/blog" element={<Blog/>}/>     
        <Route path="/posts" element={<Bosts/>}/>     
        <Route path="/postbody/:id" element={<BostBody/>}/>     
       
      </Routes>
    </postsContext.Provider>
  )
}

export default App
