import { configureStore } from '@reduxjs/toolkit';
import login from './login/slice';

const store = configureStore({
  reducer: {
    login: login.reducer,
  },
});

export type RootStoreStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = ReturnType<typeof store.dispatch>;

export default store;
