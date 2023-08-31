import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/fullstack">full stack</Link>
          </li>
          <li>
            <Link to="/mernstack">
            mern stack
            </Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/fullstack" Component={Contact}></Route>
        <Route path="/mernstack" Component={About}></Route>
        <Route path="/" exact Component={Home}></Route>

      </Routes>
    </Router>
     
    </>
  )
}

export default App
