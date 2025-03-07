import { configureStore } from '@reduxjs/toolkit';
import memeReducer from './slice/memeSlice';

 const store = configureStore({
  reducer: {
    meme: memeReducer,
  },
});

export default store;