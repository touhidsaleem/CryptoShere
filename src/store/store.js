import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slice';

const store = configureStore({
  reducer: {
    assets: cryptoReducer,
  },
});

export default store;
