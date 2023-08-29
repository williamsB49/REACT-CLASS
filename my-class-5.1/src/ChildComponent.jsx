import React from 'react'

function ChildComponent(props) {
    const williams =()=>{
        const data = "cgsdjkcbkcjac,asbjma,sj"
        props.onward(data)

    }
  return (
    <div>
        <h2>CHILD COMPONET </h2>
        <button onClick={williams}>sent the child</button>
    </div>
  )
}

export default ChildComponent