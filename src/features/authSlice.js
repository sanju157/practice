import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    isAuthenticated: (JSON.parse(localStorage.getItem('token')) ? true : false) || false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    users: JSON.parse(localStorage.getItem('users')) || [],
    token: JSON.parse(localStorage.getItem('token')),
    isLoading: false,
    isUserCreated: false,
    error: null
 }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createUser(state, action) {
      const user = action.payload

      const isAlreadyExist = state.users.find((item) => (item?.username === user.username || item?.email === user.email ))
      // console.log("isAlreadyExist:::", isAlreadyExist)

      if (isAlreadyExist) {
        state.isUserCreated = false
        state.error = "User already exist!"
        return 
      }

      state.user = user
      localStorage.setItem("user", JSON.stringify(user))

      state.users.push(user)
      localStorage.setItem("users", JSON.stringify(state.users))

      state.isUserCreated = true;
      state.error = null;
    },
    loginUser(state, action) {
      const token = "dummy#Token";
      const user = action.payload
      const isUser = state.users.find((item) => item.username === user.username)
      if (!isUser) {
        state.error = "User doesn't exist!";
        return 
      } 
      
      const matchPassword = (user.password === isUser.password)
      if (!matchPassword) {
        state.error = "Incorrect Password!";
        return
      }
      
      if (token) state.isAuthenticated = true;
      else state.isAuthenticated = false;
      state.token = token
      state.user = user
      localStorage.setItem("token", JSON.stringify(token))
      localStorage.setItem("user", JSON.stringify(user))
    },
    logoutUser(state, action) {
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;

        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },
    updateCreatedUserStatus(state, action) {
      state.isUserCreated = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  },
})

export const { createUser, loginUser, updateCreatedUserStatus, setError, logoutUser } = authSlice.actions
export default authSlice.reducer