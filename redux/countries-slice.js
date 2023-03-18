import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  selectedCountry: {},
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    selecCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const { setCountries, selecCountry } = countriesSlice.actions;

export const getAllCountries = (state) => state.countries.countries;
export const getSelectedCountry = (state) => state.countries.selectedCountry;

export default countriesSlice.reducer;
