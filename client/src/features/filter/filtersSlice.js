import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  search: "",
  sort: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { addFilter, addSearch, addSort } = filtersSlice.actions;
