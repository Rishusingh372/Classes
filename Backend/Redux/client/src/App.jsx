// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, reset } from "./counterSlice";

// function App() {
//   const count = useSelector((state) => state.countere.count);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <div>
//         <h1>Counter: {count}</h1>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//         <button onClick={() => dispatch(reset())}>Reset</button>
//       </div>
//     </>
//   );
// }

// export default App;

import {useSelector, useDispatch} from "react-redux";
// import {colorSlice} from "./colorSlice.jsx"
import {colorChange } from "./colorSlice.jsx"

const App=()=>{
  const clr = useSelector(state=>state.mycolor.color)
  const dispatch = useDispatch();

  return(
    <>
      <button onClick={()=>{dispatch(colorChange())}}>color Change</button>
      <div style={{width:"400px" , height:"400px", backgroundColor:clr}}></div>
    </>
  )
}
export default App;