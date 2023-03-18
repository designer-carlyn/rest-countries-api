import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "@/redux/countries-slice.js";

export default configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
