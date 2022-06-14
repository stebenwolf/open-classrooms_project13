import { createSlice } from '@reduxjs/toolkit'

export const loginErrorSlice = createSlice({
  name: 'loginError',
  initialState: {
    value: null
  },
  reducers: {
    noError: state => {
      state.value = null
    },
    logError: (state, action) => {
      state.value = true
    }
  }
});

export const { noError, logError } = loginErrorSlice.actions;

export default loginErrorSlice.reducer;