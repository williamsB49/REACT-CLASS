import React,{useState} from 'react'
import ChildComponent from './ChildComponent'

function ParentComponet() {
    const[received,setReceived] = useState(' ')
    const handledata =(data)=>{
        setReceived(data)
    }
  return (
    <>
      <h1> ParentComponet </h1>
    <p>DATA FROM CHILD :{received}</p>
    <ChildComponent onward={handledata}/>
    </>
  
  )
}

export default ParentComponet