import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  '/auth/register',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', body);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response.status === 400) {
        alert('Invalid email or password. Please try again.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('/auth/login', async (body, thunkAPI) => {
  try {
    const res = await axios.post('/users/login', body);

    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    if (error.response.status === 400) {
      alert('Invalid email or password. Please try again.');
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  '/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);

    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
