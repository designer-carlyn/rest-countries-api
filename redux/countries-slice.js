import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  selectedCountry: [],
  countryCode: [],
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
    setCountryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    removeCountryCode: (state, action) => {
      state.countryCode = [];
    },
  },
});

export const {
  setCountries,
  selectCountry,
  removeSelectedCountry,
  setCountryCode,
  removeCountryCode,
} = countriesSlice.actions;

export const getAllCountries = (state) => state.countries.countries;
export const getSelectedCountry = (state) => state.countries.selectedCountry;
export const getCountryCode = (state) => state.countries.countryCode;

export default countriesSlice.reducer;
