import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: { email: "", password: "" },
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: function (state, action) {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = { email: "", password: "" }
    },
  },
})

//? olusan action fonksiyonları sliceAdi.actions 'dan destructure edilerek export edilir.
export const { setUser, clearUser } = loginSlice.actions

//? yazilan slice'in reducer'i sliceAdi.reducer seklinde export edilmelidir.
export default loginSlice.reducer
