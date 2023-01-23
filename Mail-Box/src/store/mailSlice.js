
import { createSlice} from "@reduxjs/toolkit";

const iniState={allMails:[],inbox:true, unreadMails:0}
const mailSlice=createSlice({
    name:'allmails',
    initialState:iniState,
    reducers:{
        setMailArr(state,action){
            state.allMails=action.payload
        },
        setInboxShow(state,action){
            state.inbox=action.payload
        },
        setUnreadMails(state,action){
            state.unreadMails=action.payload
        }
    }
})

export default mailSlice.reducer
export const mailArrActions=mailSlice.actions
export const showInboxActions=mailSlice.actions

