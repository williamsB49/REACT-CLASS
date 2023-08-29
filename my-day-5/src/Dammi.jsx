import React, { useState,useEffect } from 'react'

function Dammi() {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
useEffect(()=>{
    async function fetchData(){
        const url = "https://restcountries.com/v3.1/all";
        try{
            const response = await fetch(url)
            const data = await response.json()
            for(var i=0;i<data.length;i++){
                if(data[i].name.common=="Peru"){
                    setData(data[i].flag)
                }
            }
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }
    setTimeout(()=>{
        fetchData()
    },4000)
    
},[])

if (loading) {
    return <div><h1>LOADING.........</h1></div>
    
}
if(error){
    return <div>{error.message}</div>
}
  return (
    <div>
        <h1>hbfjkcnakca,vkdgiq</h1>
        <p>{data}</p>
    </div>
  )
}

export default Dammi