import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './components/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
  },
});
