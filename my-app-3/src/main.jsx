import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Like from './Like.jsx'
import Coment from './Coment.jsx'
import Post from './Post.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  <div className='williams'>
  <Post name="post -1 comment" className="div" flag = "true"/>
    <Post name="post-2 facebook" className="div" flag = "false"/>
    <Post name="post-3 facebook" className="div" flag = "true"/>
    <Post name="post-4 facebook" className="div" flag = "false"/>
    
  </div>
    
  
   
    
    
  </React.StrictMode>,
)
