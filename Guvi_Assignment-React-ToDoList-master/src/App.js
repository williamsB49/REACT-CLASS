
import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
        <TodoList />
    </div>
  );
}


function TodoList()
{

  // const [data,setData] = useState([["Create theme"," Work on wordpress"," Organize office main department"," Error solve in HTML template"]);
  const [data,setData] = useState({"Create theme":false ,"Work on wordpress":false ,"Organize office main department":false,"Error solve in HTML template":false});
  const [active, setActive] =useState(true);
  const [completed, setCompleted] =useState(true);

  // to check and uncheck task
  const handleTask= (keyName) =>{

    // data[index][keyName]=!data[index][keyName];
    setData({...data , [keyName] : !(data[`${keyName}`]) })    
    
  }
  // console.log(data);

  //to add new task checks enter and adds new task
  const handleSubmit= (keyBtn,newTask) =>{

    // data[index][keyName]=!data[index][keyName];
    // setData([...data])    
      // data.push({newTask:false})
      if(keyBtn==='Enter')
      {
        setData({...data,  [newTask] : false  })
        // console.log(keyBtn,newTask);
      }
      
  }

  return(

    <div className='todo-container'>
        <div>
          <input className='todo-inp' type="text" onKeyPress={(e)=>{handleSubmit( e.code, e.target.value)}} placeholder='Add Task'/>
        </div>
        <div className='todo-btns-container'>
          <button onClick={()=>{setActive(true) ;setCompleted(true)}}>All</button>
          <button onClick={()=>{setActive(true) ;setCompleted(false)}} >Active</button>
          <button onClick={()=>{setActive(false);setCompleted(true)}}>Completed</button>
        </div>
        <div className='tasks-container'>
        {(active && completed) ? Object.keys(data).map((task,ind)=>
                                (data[task]) ? 
                                <div key={ind}><label  ><input name={ind} onChange={()=>handleTask(task)} defaultChecked type="checkbox"/><s>{task}</s></label></div>:
                                <div key={ind}><label  ><input name={ind} onChange={()=>handleTask(task)} type="checkbox"/>{task}</label></div>
                              
                                ) : 
                                
                                (active && !completed)? Object.keys(data).map((task,ind)=>
                                  (data[task]) ? 
                                  null:
                                  <div key={ind}><label  ><input name={ind} onChange={()=>handleTask(task)} type="checkbox"/>{task}</label></div>) 
                                            :
                                Object.keys(data).map((task,ind)=>
                                  (data[task]) ? 
                                  <div key={ind}><label ><input name={ind} onChange={()=>handleTask(task)} defaultChecked  type="checkbox"/><s>{task}</s></label></div>:
                                  null ) 
        }
        
        </div>
    </div>

  );

}

export default App;
