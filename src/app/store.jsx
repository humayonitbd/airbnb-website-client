import { configureStore } from '@reduxjs/toolkit'
import apiSlices from '../Feature/api/apiSlice';
// import searchSlice from '../Feature/Products/ProductSlice';
// import { productApi } from '../Feature/api/apiSlice';


const store = configureStore({
  reducer: {
    // search: searchSlice ,
    [apiSlices.reducerPath]: apiSlices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlices.middleware),
});

export default store;
// reducer: {
//     search: searchReducer,
//     // Add other reducers here if needed
//   },
