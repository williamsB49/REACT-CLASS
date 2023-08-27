import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inedex from './Inedex'

function App() {
  const [count, setCount] = useState(0)

  const handlehide =()=>{
    setCount(count+1)
  }

  return (
    <>
    <div>
    <h1>mount in index</h1>
      <p>app count{count}</p>
      <button onClick={handlehide}>show and hide</button>
    </div>
    {count < 5 ? <Inedex />:<div>the will mount this</div>}
     
     
    </>
  )
}

export default App
