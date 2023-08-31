import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contect from './Contect'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link className='nav-link' to='/'>Home</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link' to='/about'>About</Link>
        
      </li>
      <li class="nav-item">
      <Link className='nav-link' to='/Contact'>Contact</Link>
      </li>
      <li class="nav-item">
      <Link className='nav-link'>address</Link>
      </li>
    </ul>
    </div>
</nav>
<Routes>
  <Route path='/'  element={<Home />}></Route>
  <Route path='/about' element={<About />}></Route>
  <Route path='/Contact' element={<Contect />}></Route>
</Routes>
</Router>

    

    

  
    </>
  )
}

export default App
