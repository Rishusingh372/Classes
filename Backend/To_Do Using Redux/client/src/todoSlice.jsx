import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
     name:"todo",
     initialState:{
        task:[]
     },
     reducers:{
        addTask:(state, actions)=>{  
            // Add status property to new tasks
            state.task.push({...actions.payload, status: false});
        },
        delTask:(state, actions)=>{
            state.task= state.task.filter(item=>item.id!=actions.payload.id);      
        },
        // New reducer to change status
        setStatus:(state, actions)=>{
            for (var i=0; i<state.task.length; i++) {
                if (state.task[i].id === actions.payload.id) {
                    state.task[i].status = actions.payload.status;
                }
            }
        }
     }
})

export const {addTask, delTask, setStatus}  = todoSlice.actions;
export default todoSlice.reducer;