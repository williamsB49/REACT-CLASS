import React, { useState } from 'react'
import Like from './Like'
import Coment from './Coment'

function post(props) {
  const error =['williams','jack','abi','bala']
  //const flag = props.flag
  const [flag , setFlag]=useState(true)
  const handlelike = ()=>{
    setFlag(false)
  }
  const handlecoment =()=>{
    setFlag(true)
  }
  return (
    <div>
    <h3 className='color'>{props.name}</h3>
    <ul>
      {
        error.map((item)=>(
          <li key={item}>{item}</li>

        ))
      }
    </ul>
    {flag ?  <button className='button' onClick={handlelike}>ADD</button> :  <button className='button' onClick={handlecoment}>REMOVE</button>}
   
   
   
    <Like />
    <Coment />
    </div>
  )
}

export default post