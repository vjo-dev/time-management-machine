import { configureStore } from '@reduxjs/toolkit';
import presentReducer from '../features/present/presentSlice';

export const store = configureStore({
  reducer: {
	  present: presentReducer,
  },
});
