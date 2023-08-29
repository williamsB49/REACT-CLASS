import { useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeDemo from './LifeDemo'

function App() {
  const [data, setData] = useState([])
  const [loading,setLoading]= useState(true)
  const [error,setError]= useState(null)

  useEffect(()=>{
    async function fetchData() {
      const apiUrl = "https://restcountries.com/v3.1/all";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        for (var i = 0; i < data.length; i++) {
          if (data[i].names.common == "Peru") {
           // console.log(data[i].flag);
           setData(data[i].flag)
          } 
        }
      } 
      catch (err) {
        //console.log("Error fetching Data: ", err);
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
  if(loading){
    return <div>loading..........</div>
  }
  if(error){
    return <div>ERROR :{error.message}</div>
  }

  return (
    <>

     <LifeDemo />
     <h1>FETCH DATA</h1>
     <p>{data}</p>
    </>
  )
}

export default App
