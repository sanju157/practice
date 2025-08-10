import { configureStore } from "@reduxjs/toolkit";

import authReducer from '@features/authSlice.js'
import productReducer from '@features/productSlice.js'
import api from "@api/api";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export default store;