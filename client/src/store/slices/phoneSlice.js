import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from './../../api';

const PHONE_NAME_SHEMA = 'phone';

const initialState = {
  phones: [],
  preorders: [],
  isFetching: false,
  error: null,
};

export const getPhoneThunk = createAsyncThunk(
  `${PHONE_NAME_SHEMA}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getPhones();
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const createPhoneThunk = createAsyncThunk(
  `${PHONE_NAME_SHEMA}/create`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.createPhone(payload);

      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const deletePhoneThunk = createAsyncThunk(
  `${PHONE_NAME_SHEMA}/delete`,
  async (payload, { rejectWithValue }) => {
    try {
      await API.deletePhone(payload);
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const getPhonePreordersThunk = createAsyncThunk(
  `${PHONE_NAME_SHEMA}/get/id/preorder`,
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.getOpdersByPhoneId(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const phoneSlice = createSlice({
  name: PHONE_NAME_SHEMA,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPhoneThunk.fulfilled, (state, { payload }) => {
      state.phones = [...payload];
      state.isFetching = false;
    });
    builder.addCase(getPhoneThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    // create
    builder.addCase(createPhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(createPhoneThunk.fulfilled, (state, { payload }) => {
      state.phones.push(payload);
      state.isFetching = false;
    });
    builder.addCase(createPhoneThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    //delete
    builder.addCase(deletePhoneThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(deletePhoneThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.phones.findIndex(p => p.id !== payload);
    });
    builder.addCase(deletePhoneThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    // get/id/preorder
    builder.addCase(getPhonePreordersThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getPhonePreordersThunk.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.preorders = [...payload];
    });
    builder.addCase(getPhonePreordersThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer } = phoneSlice;

export default reducer;
