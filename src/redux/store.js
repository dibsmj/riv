import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice';
import { api } from './slices/apiSlice';

const setupStore = (preloadedState) =>
  configureStore({
    reducer: {
      global: globalReducer,
      [api.reducerPath]: api.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export default setupStore;
