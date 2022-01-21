import { createSlice, } from '@reduxjs/toolkit'

const userLice=createSlice({
    name:"user",
    initialState:{
        currentuser:null,
        isfathing:false, 
        error:false,
    },
    reducers:{
        loginState:(state)=>{
            state.isfathing=true;
            console.log(state)
        },
        loginsuccess:(state,action)=>{

       state.isfathing=false;
       state.currentuser=action.payload
       console.log(state.currentuser)

        },
        loginerror:(state)=>{
            state.error=true;

        }
    }
})

export const { loginerror,loginsuccess,loginState } =  userLice.actions

export default  userLice.reducer