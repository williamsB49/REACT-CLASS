import React,{useState,useEffect} from 'react'

function LifeDemo() {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("componet is called")

    },[])
    useEffect(()=>{
        console.log("component is updated")
    })
  return (
    <>
     <h1>Life is demo componet is use in useEffect</h1>
    <p> COUNTED :{count}</p>
    <button onClick={()=>setCount(count+1)}>Increament</button>
    </>
   
  )
}

export default LifeDemo