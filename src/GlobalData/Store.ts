import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import counterReducer from "./CounterSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    counter:counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;