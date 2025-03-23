import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
// Configure the store
export const store = configureStore({
  reducer: {
    toggleHeader: authSlice,
  },
});

// Infer types for the RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
