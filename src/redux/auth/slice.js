import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: localStorage.getItem('token') || null,
  isLoggedIn: !!localStorage.getItem('token'),
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    clearCredentials(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        localStorage.setItem('token', action.payload.token);
        window.location.reload();
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(logOut.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoading = false;
        localStorage.removeItem('token');
        window.location.reload();
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = localStorage.getItem('token');
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
        localStorage.removeItem('token');
        // window.location.href = '/login';
      });
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
