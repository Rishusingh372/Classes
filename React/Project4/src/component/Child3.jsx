import React from 'react'
import { useContext } from 'react'
import { myprovider } from '../App'
const Child3 = (props) => {
    // const {mobile,setmobile} = useContext(myprovider);
    // const changenumber = () => {
    //     setmobile("9876543210");
    // }

    // API handle 
    const data = useContext(myprovider);
    // console.log(data);
  return (
    <>
      <h3>Mai Child 3 hu</h3>
      {/* <h3>name:{props.val1}</h3>
        <h3>mobile:{mobile}</h3>
        <button onClick={changenumber}>Change Mobile</button> */}
        {/* <h1>name:{props.val1}</h1> */}
        {/* <h1>mobile:{props.val2}</h1> */}
        {/* <h1>mobile:{props.val3}</h1> */}

        {
          data.map((v)=>{
          return(
              <div key={v.id}>
                <h1>{v.namekey}</h1>
                <h1>{v.mobile}</h1>
              </div>
            
          )
          })
        }

    </>
  )
}

export default Child3