import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode:"light",
    token:null
}

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode:(state) => {
            console.log("in setmode")
            state.mode = state.mode === 'light' ? 'dark' : "light"
        },
    setToken:(state,action)=>{
        console.log("set token",action.payload)
        state.token = action.payload;
    }
    }
});

export const {setMode,setToken} = globalSlice.actions; 
export default globalSlice.reducer; 