import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedInUser: null,
    isEditing: false,
    token: null,
    tokenPath: null
  },
  reducers: {
    logOut: state => {
      state.loggedInUser = null
    },
    logIn: state => {
      state.loggedInUser = true
    },
    editName: (state, action) => {
      state.isEditing = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setTokenPath: (state, action) => {
      state.tokenPath = action.payload
    }
  }
});

export const { logIn, logOut, editName, setToken, setTokenPath } = userSlice.actions;

export default userSlice.reducer;