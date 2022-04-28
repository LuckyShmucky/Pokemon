import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from './Slices/SearchAndDataSlice'

export const store = configureStore({
    reducer:{
        search: searchBarReducer
    }
})

