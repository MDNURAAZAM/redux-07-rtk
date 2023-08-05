import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import jobsReducer from "../features/jobs/jobsSlice";
import filtersReducer from "../features/filter/filtersSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    filters: filtersReducer,
  },
});
