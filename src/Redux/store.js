// import { configureStore } from "@reduxjs/toolkit";
// import sliceTodos from './reducer'

import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

// const store=configureStore({
//     reducer:sliceTodos
// })

// export default store

const store =legacy_createStore(reducer) 

export default store