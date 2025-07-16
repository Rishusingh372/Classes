import React from 'react'

const Mycomp = (props) => {
  return (
   <>
     <h1>This component is a child of Home component</h1>
     <h1>{props.data}</h1>
   </>
  )
}

export default Mycomp