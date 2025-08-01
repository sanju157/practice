import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: JSON.parse(localStorage.getItem('token')) ? true : false,
    token: JSON.parse(localStorage.getItem('token')) || null,
    userInfo: JSON.parse(localStorage.getItem('user')) || null,
    loading: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoader(state, action) {
            state.loading = action.payload
        },
        setUser(state, action) {
            console.log("setuser action", action)
            state.token = action.payload.token
            state.userInfo = action.payload.userInfo
            if (action.payload.token) state.isAuthenticated = true
            else state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => {

    }
})

export const { setLoader, setUser} = authSlice.actions;
export default authSlice.reducer
