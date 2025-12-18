import { useState } from "react";
import { addTask, delTask, setStatus } from "./todoSlice"; // Import setStatus
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteSweep } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const App=()=>{
  const [val, setVal]= useState("");
  const dispatch = useDispatch();
  const myTask= useSelector(state=>state.todo.task);

  const ans = myTask.map((key, index) => {

  let myStyle = {};

  if (key.status === true) {
    myStyle = {
      textDecoration: "line-through",
      color: "red"
    };
  } else {
    myStyle = {
      textDecoration: "none",
      color: "black"
    };
  }

  return (
    <tr key={key.id}>
      <td>{index + 1}</td>
      <td style={myStyle}>
        {key.work}
      </td>

      <td>
        <MdDeleteSweep onClick={() => { dispatch(delTask({ id: key.id })) }} />
      </td>
      <td>
        <FaCircleCheck onClick={() => { dispatch(setStatus({ id: key.id, status: true })) }} />
      </td>
      <td>
        <ImCross onClick={() => { dispatch(setStatus({ id: key.id, status: false })) }} />
      </td>
      <td> edit </td>
    </tr>
  );
  })

  return(
    <>
      <h1> To Do App </h1>
      <hr />
      Enter Task : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}} />
      <button onClick={()=>{dispatch(addTask({id: Date.now(), work:val}))}}>Add</button>
      <hr />
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>SNo</th>
            <th>Assigned Task</th>
            <th>Delete</th>
            <th>Check</th>
            <th>Crose</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </>
  )
}
export default App;