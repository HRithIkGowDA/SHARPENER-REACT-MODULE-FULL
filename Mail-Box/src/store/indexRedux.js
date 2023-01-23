
import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mailSlice";
import authReducer from "./authSlice";

const store=configureStore({
    reducer:{mailArr:mailReducer,auth:authReducer}
})

export default store