import React from 'react'
import Chil from './Chil'

function Parent() {
    const williams=["williams","jack","peter","bala"]
  return (
    <div>
        <h1>LIST OF NAMES</h1>
        <Chil williams={williams}></Chil>
    </div>
  )
}

export default Parent