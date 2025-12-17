// import {configureStore} from '@reduxjs/toolkit';
// import myReducer from "./counterSlice";

// const store = configureStore({
//     reducer: {
//         countere: myReducer,
//     },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";


import myReducer from "./colorSlice"

const store = configureStore({
    reducer:{
        mycolor:myReducer
    }
})

export default store;