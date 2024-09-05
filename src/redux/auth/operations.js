import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      const { token } = response.data;
      localStorage.setItem('token', token);
      setAuthHeader(token);
      return response.data;
    } catch (error) {
      console.error(
        'Registration error:',
        error.response ? error.response.data : error.message
      );
      clearAuthHeader();
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      const { token } = response.data;
      localStorage.setItem('token', response.data.token);
      setAuthHeader(token);
      return response.data;
    } catch (error) {
      console.error(
        'Login error:',
        error.response ? error.response.data : error.message
      );
      clearAuthHeader();
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    localStorage.removeItem('token');
    clearAuthHeader();
    return response.data;
  } catch (error) {
    console.error(
      'Logout error:',
      error.response ? error.response.data : error.message
    );
    return thunkAPI.rejectWithValue(
      error.response ? error.response.data.message : error.message
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      console.error(
        'Refresh user error:',
        error.response ? error.response.data : error.message
      );
      clearAuthHeader();
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);
