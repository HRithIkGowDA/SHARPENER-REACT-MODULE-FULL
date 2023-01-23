
import { createSlice } from "@reduxjs/toolkit";

const userAuthDetail=JSON.parse(localStorage.getItem('currUser'))
const iniState={authenticated:!!userAuthDetail,token:userAuthDetail?userAuthDetail.token:null,email:userAuthDetail?userAuthDetail.email:null}
const authSlice=createSlice({
    name:'authentication',
    initialState:iniState,
    reducers:{
        isAuthenticated(state){
            state.authenticated=true
        }
    }
    
})

export default authSlice.reducer
export const setAuthActions=authSlice.actions