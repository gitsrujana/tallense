import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import globalReducer from './index';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../components/features/auth/authSlice';
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        global:globalReducer,
        auth:authReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

setupListeners(store.dispatch)