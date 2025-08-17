import React from 'react'
import Child3 from './Child3'
import { useContext } from 'react'
import { myprovider } from '../App'

const Child2 = () => {
  const {name,setname} = useContext(myprovider);
  const changename = () => {


      
  }

  return (
     <>
      <h3>Mai Child 2 hu or mere pass child3</h3>
        <h1>name:</h1>
        <Child3 />
    </>
  )
}

export default Child2