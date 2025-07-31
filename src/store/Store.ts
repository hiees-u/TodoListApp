// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './TodoStore';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// Cho TypeScript biết dạng của state và dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
