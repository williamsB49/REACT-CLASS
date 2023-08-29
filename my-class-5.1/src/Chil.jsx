import React from 'react'
import GrandChild from './GrandChild'

function Chil(props) {
  return (
    <div>
        <h2>child component</h2>
        <ol>
        {props.williams.map((williams,index)=>(
            <li key={index}>{williams}</li>
        ))}

         

        </ol>
        <GrandChild williams={props.williams}/>
    </div>
  )
}

export default Chil