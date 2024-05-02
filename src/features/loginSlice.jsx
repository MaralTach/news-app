import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        email: "",
        password: ""
    }
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUser: (state, action) =>  {
            state.user = action.payload
        },
        clearUser: (state, action) => {
            state.user = {email: "", password: ""}
        }
    }
})

export const {setUser} = loginSlice.actions

export default loginSlice.reducer