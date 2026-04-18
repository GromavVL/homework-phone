import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './slices/phoneSlice';

const store = configureStore({
  reducer: {
    phoneData: phoneReducer,
  },
});

export default store;
