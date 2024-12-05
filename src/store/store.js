
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartReducer'; 
import favoritesReducer from './slice/favoritesSlice'; 
import categoriesReducer from './slice/categorySlice'; 


const store = configureStore({
  reducer: {

    cart: cartReducer,
    favorites: favoritesReducer, 
    categories: categoriesReducer,
  },
});

export default store;
