import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, addJob, editJob, deleteJob } from "./jobsAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (filter) => {
  const response = await getJobs(filter);
  return response;
});

export const createJob = createAsyncThunk("jobs/createJob", async (body) => {
  const response = await addJob(body);
  return response;
});

export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, body }) => {
    const response = await editJob({ id, body });
    return response;
  }
);

export const removeJob = createAsyncThunk("jobs/removeJob", async (id) => {
  const response = await deleteJob(id);
  return response;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    editingActive: (state, action) => {
      state.editing = action.payload;
    },
    editingInActive: (state) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        const deletedIndex = action?.meta?.arg;
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        console.log(deletedIndex);
        state.jobs = state.jobs.filter((job) => job.id !== deletedIndex);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs.push(action.payload);
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(updateJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        const indexToUpdate = state.jobs.findIndex(
          (job) => job.id === action.payload.id
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
export const { editingActive, editingInActive } = jobSlice.actions;
