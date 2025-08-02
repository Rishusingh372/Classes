import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
  return (
     <>
      <h3>Mai Child 2 hu or mere pass child3</h3>
        <h1>name:{props.val1}</h1>
        <Child3 val1={props.val1}/>
    </>
  )
}

export default Child2