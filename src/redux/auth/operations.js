import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registr = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credential);
      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(alert('User already exist'));
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credential);
      setAuthHeader(response.data.token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(alert('Wrong login or password'));
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
