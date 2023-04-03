import { logOut, refreshUser, registr } from './operations';
import { logIn } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const authSLice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registr.pending, (state, action) => state)
      .addCase(registr.fulfilled, (state, action) => {
        state.user = action.payload.user; 
        state.token = action.payload.token; 
        state.isLoggedIn = true;
      })
      .addCase(registr.rejected, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user; 
        state.token = action.payload.token; 
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      }),
});

export const authReducer = authSLice.reducer;
