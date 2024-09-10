import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{token:null},
    reducers:{
        setCredentials:(state,action) => {
            const {accessToken} = action.payload;
            state.token = accessToken;
            localStorage.setItem("user",true)
        },
        logOut:(state,action) => {
            console.log("in logout reducer")
            state.token = null;
            console.log("in logout reducer",state.token)
            localStorage.setItem("user",false);
            
         
        }
    }
})

export const {setCredentials,logOut} = authSlice.actions;
export default authSlice.reducer; 
export const selectCurrentToken = (state) => state.auth.token; 