import axios from "../../utils/axios";

export const getJobs = async (filter) => {
  let queryString = "";
  if (filter?.length > 0) {
    queryString = `type_like=${filter}`;
  } else {
    queryString = "";
  }
  console.log(queryString);
  const response = await axios.get(`/jobs?${queryString}`);
  return response.data;
};

export const addJob = async (body) => {
  const response = await axios.post("/jobs", body);
  return response.data;
};

export const editJob = async ({ id, body }) => {
  const response = await axios.put(`/jobs/${id}`, body);
  return response.data;
};

export const deleteJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
