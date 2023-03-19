import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  selectedCountry: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    removeSelectedCountry: (state) => {
      state.selectedCountry = [];
    },
  },
});

export const { setCountries, selectCountry, removeSelectedCountry } =
  countriesSlice.actions;

export const getAllCountries = (state) => state.countries.countries;
export const getSelectedCountry = (state) => state.countries.selectedCountry;

export default countriesSlice.reducer;
